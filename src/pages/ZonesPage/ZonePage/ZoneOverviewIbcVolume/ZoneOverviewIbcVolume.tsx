import { useState } from 'react';

import { OverviewCardPeriod, OverviewChartCard } from 'components/OverviewChartCard';
import { useAggregatedDataByPeriod } from 'hooks/useAggregatedDataByPeriod';

import { useZoneOverviewIbcVolumeCard } from './useZoneOverviewIbcVolumeCard';
import { VOLUME_CARD_METADATA } from './ZoneOverviewIbcVolume.metadata';

import { ZoneOverviewIbcVolumeProps } from '.';

export function ZoneOverviewIbcVolume({ className }: ZoneOverviewIbcVolumeProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<OverviewCardPeriod>('1w');
  const { data, loading } = useZoneOverviewIbcVolumeCard(selectedPeriod);

  const flatData = useAggregatedDataByPeriod(
    data?.chart ?? [],
    selectedPeriod,
    VOLUME_CARD_METADATA.chartKeys
  );

  return (
    <OverviewChartCard
      className={className}
      title="IBC Volume"
      data={data}
      chartData={flatData}
      loading={loading}
      metadata={VOLUME_CARD_METADATA}
      onPeriodSelected={(period) => setSelectedPeriod(period)}
    />
  );
}
