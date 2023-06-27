import { useQuery } from '@tanstack/react-query';

import { OVERVIEW_PERIODS_API_KEYS } from 'components/OverviewChartCardWithMetadata';
import { AnalysisCardPeriod } from 'types/AnalysisCardPeriod';
import { ChartItemWithTime } from 'types/chart';
import {
  MappedComparisonResult,
  mapComparisonRestApiChartsData,
} from 'utils/mapComparisonRestApiChartsData';

export type ZoneTransactionsResult = Pick<TransactionApiResult, 'zone' | 'totalTxsCount'>;

interface ZonesTransactionsComparisonResult {
  data: ZoneTransactionsResult[] | undefined;
  charts: MappedComparisonResult<TransactionChart[]>;
  loading: boolean;
}

export function useTransactionsComparison(
  zones: string[],
  period: AnalysisCardPeriod
): ZonesTransactionsComparisonResult {
  const { data: responses, isLoading: loading } = useQuery<TransactionRootApiResult[]>({
    queryKey: [`txsChart/${zones.join(',')}/${OVERVIEW_PERIODS_API_KEYS[period]}`],
    enabled: !!period && !!zones?.length,
  });

  const result = responses?.map((item) => item.data)?.filter((d) => !!d) ?? [];
  const charts: MappedComparisonResult<TransactionChart[]> = mapComparisonRestApiChartsData(result);

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
