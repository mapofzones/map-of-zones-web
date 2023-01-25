import { OverviewChartCard } from 'components/OverviewChartCard';

import { useZoneOverviewTransactionCard } from './useZoneOverviewTransactionsCard';
import { TRANSACTIONS_CARD_METADATA } from './ZoneOverviewIbcTransactions.metadata';

import { ZoneOverviewTransactionsProps } from '.';

export function ZoneOverviewTransactions({ className }: ZoneOverviewTransactionsProps) {
  const { data, loading } = useZoneOverviewTransactionCard();

  return (
    <OverviewChartCard
      className={className}
      title="Transactions"
      data={data}
      loading={loading}
      metadata={TRANSACTIONS_CARD_METADATA}
    />
  );
}
