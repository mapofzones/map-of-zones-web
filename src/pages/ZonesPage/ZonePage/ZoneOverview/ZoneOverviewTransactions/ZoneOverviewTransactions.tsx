import { useState } from 'react';

import { OverviewChartCard } from 'components/OverviewChartCardWithMetadata';
import { AnalysisCardPeriod } from 'types/AnalysisCardPeriod';

import { useZoneOverviewTransactionCard } from './useZoneOverviewTransactionsCard';
import { TRANSACTIONS_CARD_METADATA } from './ZoneOverviewIbcTransactions.metadata';

import { ZoneOverviewTransactionsProps } from '.';

export function ZoneOverviewTransactions({ className }: ZoneOverviewTransactionsProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<AnalysisCardPeriod>('1w');
  const { data, loading } = useZoneOverviewTransactionCard(selectedPeriod);

  return (
    <OverviewChartCard
      className={className}
      title="Transactions"
      data={data}
      chartData={data?.chart ?? []}
      loading={loading}
      metadata={TRANSACTIONS_CARD_METADATA}
      onPeriodSelected={setSelectedPeriod}
    />
  );
}
