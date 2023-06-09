import { useEffect, useState } from 'react';

import { useQueries } from '@tanstack/react-query';

import { OVERVIEW_PERIODS_API_KEYS } from 'components/OverviewChartCardWithMetadata';
import { AnalysisCardPeriod } from 'types/AnalysisCardPeriod';
import { ChartItemWithTime } from 'types/chart';
import { mapCharts } from 'utils/mapCharts';

interface ZoneTransactionsResult {
  zone: string;
  totalTxsCount?: number;
}

interface ZonesTransactionsComparisonResult {
  data: ZoneTransactionsResult[] | undefined;
  charts: Record<string, ChartItemWithTime[]>;
  loading: boolean;
}

export function useTransactionsComparison(
  zones: string[],
  period: AnalysisCardPeriod
): ZonesTransactionsComparisonResult {
  const [handledData, setHandledData] = useState<ZonesTransactionsComparisonResult>(
    {} as ZonesTransactionsComparisonResult
  );

  const queries = zones.map((zone) => {
    return {
      queryKey: [`txsChart/${zone}/${OVERVIEW_PERIODS_API_KEYS[period]}`],
      enabled: !!period && !!zone,
    };
  });
  const responses = useQueries<TransactionApiResult[]>({ queries });

  useEffect(() => {
    const result = responses.map((result) => (result.data as any)?.data).filter((d) => !!d) ?? [];
    const loading = responses.every((result) => result.isLoading);
    const charts = mapCharts(result, ['chart'], 'txsCount');

    setHandledData({
      data: result.map((item) => ({ zone: item.zone, totalTxsCount: item.totalTxsCount })),
      charts,
      loading,
    });
  }, [JSON.stringify(responses)]); // fix bug in @tanstack/react-query library: responses has new reference for each rerender, so effect invoked too often

  return handledData;
}

interface TransactionApiResult {
  zone: string;
  totalTxsCount: number;
  chart: TransactionChart[];
}

interface TransactionChart {
  time: number;
  txsCount: number;
}
