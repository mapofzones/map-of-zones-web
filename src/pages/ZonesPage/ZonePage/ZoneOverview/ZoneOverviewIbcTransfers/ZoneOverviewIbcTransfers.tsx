import { useState } from 'react';

import { OverviewChartCard } from 'components/OverviewChartCardWithMetadata';
import { AnalysisCardPeriod } from 'types/AnalysisCardPeriod';

import { useZoneOverviewIbcTransfersCard } from './useZoneOverviewIbcTransfersCard';
import { TRANSFERS_CARD_METADATA } from './ZoneOverviewIbcTransfers.metadata';

import { ZoneOverviewIbcTransfersProps } from '.';

export function ZoneOverviewIbcTransfers({ className }: ZoneOverviewIbcTransfersProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<AnalysisCardPeriod>('1w');

  const { data, loading } = useZoneOverviewIbcTransfersCard(selectedPeriod);

  return (
    <OverviewChartCard
      className={className}
      title="IBC Transfers"
      data={data}
      chartData={data?.chart ?? []}
      loading={loading}
      metadata={TRANSFERS_CARD_METADATA}
      onPeriodSelected={setSelectedPeriod}
      period={selectedPeriod}
    />
  );
}
