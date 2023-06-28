import { AnalysisComparisonBaseResult } from 'types/models/Analysis/AnalysisComparisonBaseResult';
import {
  AnalysisUniqueDelegatorsApiCardResult,
  UniqueDelegatorsChart,
} from 'types/models/Analysis/ZoneAnalysisUniqueDelegators';
import { ZonesAnalysisRequestByZonesAndPeriod } from 'types/models/Analysis/ZonesAnalysisRequestByZonesAndPeriod';
import { mapComparisonRestApiChartsData } from 'utils/mapComparisonRestApiChartsData';

import { restApi } from '../baseRestApi';

const comparisonApi = restApi.injectEndpoints({
  endpoints: (builder) => ({
    getUniqueDelegatorsComparison: builder.query<
      ZonesUniqueDelegatorsComparisonResult,
      ZonesAnalysisRequestByZonesAndPeriod
    >({
      query: ({ zones, period }) => `delegatorCountChart/${zones.join(',')}/${period}`,
      transformResponse: (responses: AnalysisUniqueDelegatorsApiCardResult[]) => {
        const result = responses?.map((item) => item.data)?.filter((d) => !!d) ?? [];

        return {
          data: result,
          charts: mapComparisonRestApiChartsData(result),
        };
      },
    }),
  }),
});

export const { useGetUniqueDelegatorsComparisonQuery } = comparisonApi;

type ZonesUniqueDelegatorsComparisonResult = AnalysisComparisonBaseResult<
  AnalysisUniqueDelegatorsApiCardResult,
  'zone' | 'totalDelegatorsCount',
  UniqueDelegatorsChart
>;
