import { OverviewChartCard } from 'components/OverviewChartCard';

import { useZoneOverviewIbcTransfersCard } from './useZoneOverviewIbcTransfersCard';
import { TRANSFERS_CARD_METADATA } from './ZoneOverviewIbcTransfers.metadata';

import { ZoneOverviewIbcTransfersProps } from '.';

export function ZoneOverviewIbcTransfers({ className }: ZoneOverviewIbcTransfersProps) {
  const { data, loading } = useZoneOverviewIbcTransfersCard();

  return (
    <OverviewChartCard
      className={className}
      title="IBC Transfers"
      data={data}
      loading={loading}
      metadata={TRANSFERS_CARD_METADATA}
    />
  );
}
