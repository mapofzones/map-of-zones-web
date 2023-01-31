import { OverviewChartCard } from 'components/OverviewChartCard';
import { useAggregatedDataByPeriod } from 'hooks/useAggregatedDataByPeriod';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import { useZoneOverviewIbcVolumeCard } from './useZoneOverviewIbcVolumeCard';
import { VOLUME_CARD_METADATA } from './ZoneOverviewIbcVolume.metadata';

import { ZoneOverviewIbcVolumeProps } from '.';

export function ZoneOverviewIbcVolume({ className }: ZoneOverviewIbcVolumeProps) {
  const { data, loading } = useZoneOverviewIbcVolumeCard();

  const flatData = useAggregatedDataByPeriod(data?.chart ?? [], VOLUME_CARD_METADATA.chartKeys);

  return (
    <OverviewChartCard
      className={className}
      title="IBC Volume"
      data={data}
      chartData={flatData}
      loading={loading}
      metadata={VOLUME_CARD_METADATA}
    />
  );
}
