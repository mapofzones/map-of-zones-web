import { useState } from 'react';

import { OverviewCardPeriod, OverviewChartCard } from 'components/OverviewChartCard';
import { useAggregatedDataByPeriod } from 'hooks/useAggregatedDataByPeriod';

import { useZoneOverviewTransactionCard } from './useZoneOverviewTransactionsCard';
import { TRANSACTIONS_CARD_METADATA } from './ZoneOverviewIbcTransactions.metadata';

import { ZoneOverviewTransactionsProps } from '.';

export function ZoneOverviewTransactions({ className }: ZoneOverviewTransactionsProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<OverviewCardPeriod>('1w');
  const { data, loading } = useZoneOverviewTransactionCard(selectedPeriod);

  const chartData = useAggregatedDataByPeriod(
    data?.chart ?? [],
    selectedPeriod,
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
      onPeriodSelected={(period) => setSelectedPeriod(period)}
    />
  );
}
