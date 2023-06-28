import { restApi } from 'services/baseRestApi';
import { ChartItemWithTime } from 'types/chart';
import { DailyActiveAddressesRootApiResult } from 'types/models/Analysis/DailyActiveAddressesRootApiResult';
import { ZonesAnalysisRequestByZonesAndPeriod } from 'types/models/Analysis/ZonesAnalysisRequestByZonesAndPeriod';
import {
  MappedComparisonResult,
  mapComparisonRestApiChartsData,
} from 'utils/mapComparisonRestApiChartsData';

const comparisonApi = restApi.injectEndpoints({
  endpoints: (builder) => ({
    getActiveAddressesCountChart: builder.query<
      ZonesDailyActiveAddressesComparisonResult,
      ZonesAnalysisRequestByZonesAndPeriod
    >({
      query: ({ zones, period }) => `activeAddressesCountChart/${zones.join(',')}/${period}`,
      transformResponse: (responses: DailyActiveAddressesRootApiResult[]) => {
        const result = responses?.map((item) => item.data)?.filter((d) => !!d) ?? [];

        return {
          data: result,
          charts: mapComparisonRestApiChartsData(result),
        };
      },
    }),
  }),
});

export const { useGetActiveAddressesCountChartQuery } = comparisonApi;

export interface ZoneDailyActiveAddressesItem {
  zone: string;
  totalActiveAddresses?: number;
  totalIbcActiveAddresses?: number;
}

export interface ZonesDailyActiveAddressesComparisonResult {
  data: ZoneDailyActiveAddressesItem[];
  charts: MappedComparisonResult<ChartItemWithTime[]>;
}
