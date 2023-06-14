import { useQueries } from '@tanstack/react-query';

import { OVERVIEW_PERIODS_API_KEYS } from 'components/OverviewChartCardWithMetadata';
import { AnalysisCardPeriod } from 'types/AnalysisCardPeriod';
import { ChartItemWithTime } from 'types/chart';
import {
  MappedComparisonResult,
  mapComparisonRestApiChartsData,
} from 'utils/mapComparisonRestApiChartsData';

export interface ZoneTransactionsResult {
  zone: string;
  totalTxsCount?: number;
}

interface ZonesTransactionsComparisonResult {
  data: ZoneTransactionsResult[] | undefined;
  charts: MappedComparisonResult<ChartItemWithTime[]>;
  loading: boolean;
}

export function useTransactionsComparison(
  zones: string[],
  period: AnalysisCardPeriod
): ZonesTransactionsComparisonResult {
  const queries = zones.map((zone) => {
    return {
      queryKey: [`txsChart/${zone}/${OVERVIEW_PERIODS_API_KEYS[period]}`],
      enabled: !!period && !!zone,
    };
  });
  const responses = useQueries<TransactionApiResult[]>({ queries });

  const result =
    responses.map((result) => (result.data as TransactionRootApiResult)?.data).filter((d) => !!d) ??
    [];
  const loading = responses.every((result) => result.isLoading);
  const charts = mapComparisonRestApiChartsData(result);
  console.log(charts);

  return {
    data: result.map((item) => ({ zone: item.zone, totalTxsCount: item.totalTxsCount })),
    charts,
    loading,
  };
}

interface TransactionRootApiResult {
  data: TransactionApiResult;
}

interface TransactionApiResult {
  zone: string;
  totalTxsCount: number;
  chart: TransactionChart[];
}

interface TransactionChart extends ChartItemWithTime {
  time: number;
  txsCount: number;
}
