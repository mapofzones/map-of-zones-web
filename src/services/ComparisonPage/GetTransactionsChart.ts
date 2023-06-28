import { restApi } from 'services/baseRestApi';
import { AnalysisComparisonBaseResult } from 'types/models/Analysis/AnalysisComparisonBaseResult';
import {
  TransactionChart,
  TransactionRootApiResult,
} from 'types/models/Analysis/ZoneAnalysisTransactions';
import { ZonesAnalysisRequestByZonesAndPeriod } from 'types/models/Analysis/ZonesAnalysisRequestByZonesAndPeriod';
import { mapComparisonRestApiChartsData } from 'utils/mapComparisonRestApiChartsData';

const comparisonApi = restApi.injectEndpoints({
  endpoints: (builder) => ({
    getTransactionsChart: builder.query<
      ZonesTransactionsComparisonResult,
      ZonesAnalysisRequestByZonesAndPeriod
    >({
      query: ({ zones, period }) => `txsChart/${zones.join(',')}/${period}`,
      transformResponse: (responses: TransactionRootApiResult[]) => {
        const result = responses?.map((item) => item.data)?.filter((d) => !!d) ?? [];

        return {
          data: result,
          charts: mapComparisonRestApiChartsData(result),
        };
      },
    }),
  }),
});

export const { useGetTransactionsChartQuery } = comparisonApi;

type ZonesTransactionsComparisonResult = AnalysisComparisonBaseResult<
  TransactionRootApiResult,
  'zone' | 'totalTxsCount',
  TransactionChart
>;
