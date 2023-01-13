import { OverviewChartCard } from 'components/OverviewChartCard';

import { useZoneOverviewIbcVolumeCard } from './useZoneOverviewIbcVolumeCard';
import { VOLUME_CARD_METADATA } from './ZoneOverviewIbcVolume.metadata';

import { ZoneOverviewIbcVolumeProps } from '.';

export function ZoneOverviewIbcVolume({ className }: ZoneOverviewIbcVolumeProps) {
  const { data, loading } = useZoneOverviewIbcVolumeCard();

  return (
    <OverviewChartCard
      className={className}
      data={data}
      loading={loading}
      metadata={VOLUME_CARD_METADATA}
    />
  );
}
