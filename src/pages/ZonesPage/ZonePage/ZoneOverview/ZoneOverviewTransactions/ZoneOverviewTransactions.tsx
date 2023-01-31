import { OverviewChartCard } from 'components/OverviewChartCard';
import { useAggregatedDataByPeriod } from 'hooks/useAggregatedDataByPeriod';

import { useZoneOverviewTransactionCard } from './useZoneOverviewTransactionsCard';
import { TRANSACTIONS_CARD_METADATA } from './ZoneOverviewIbcTransactions.metadata';

import { ZoneOverviewTransactionsProps } from '.';

export function ZoneOverviewTransactions({ className }: ZoneOverviewTransactionsProps) {
  const { data, loading } = useZoneOverviewTransactionCard();

  const chartData = useAggregatedDataByPeriod(
    data?.chart ?? [],
    TRANSACTIONS_CARD_METADATA.chartKeys
  );

  return (
    <OverviewChartCard
      className={className}
      title="Transactions"
      data={data}
      chartData={chartData}
      loading={loading}
      metadata={TRANSACTIONS_CARD_METADATA}
    />
  );
}
