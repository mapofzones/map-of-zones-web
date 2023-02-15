import { useState } from 'react';

import { OverviewCardPeriod, OverviewChartCard } from 'components/OverviewChartCard';
import { useAggregatedDataByPeriod } from 'hooks/useAggregatedDataByPeriod';

import { useZoneOverviewIbcTransfersCard } from './useZoneOverviewIbcTransfersCard';
import { TRANSFERS_CARD_METADATA } from './ZoneOverviewIbcTransfers.metadata';

import { ZoneOverviewIbcTransfersProps } from '.';

export function ZoneOverviewIbcTransfers({ className }: ZoneOverviewIbcTransfersProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<OverviewCardPeriod>('1w');

  const { data, loading } = useZoneOverviewIbcTransfersCard();

  const chartData = useAggregatedDataByPeriod(
    data?.chart ?? [],
    selectedPeriod,
    TRANSFERS_CARD_METADATA.chartKeys
  );

  return (
    <OverviewChartCard
      className={className}
      title="IBC Transfers"
      data={data}
      chartData={chartData}
      loading={loading}
      metadata={TRANSFERS_CARD_METADATA}
      onPeriodSelected={(period) => setSelectedPeriod(period)}
    />
  );
}
