import { useState } from 'react';

import { OverviewCardPeriod, OverviewChartCard } from 'components/OverviewChartCard';

import { useZoneOverviewIbcVolumeCard } from './useZoneOverviewIbcVolumeCard';
import { VOLUME_CARD_METADATA } from './ZoneOverviewIbcVolume.metadata';

import { ZoneOverviewIbcVolumeProps } from '.';

export function ZoneOverviewIbcVolume({ className }: ZoneOverviewIbcVolumeProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<OverviewCardPeriod>('1w');
  const { data, loading } = useZoneOverviewIbcVolumeCard(selectedPeriod);

  return (
    <OverviewChartCard
      className={className}
      title="IBC Volume"
      data={data}
      chartData={data?.chart ?? []}
      loading={loading}
      metadata={VOLUME_CARD_METADATA}
      onPeriodSelected={(period) => setSelectedPeriod(period)}
    />
  );
}
