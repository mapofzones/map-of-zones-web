import { OverviewChartCard } from 'components/OverviewChartCard';

import { useZoneOverviewUniqueDelegates } from './useZoneOverviewUniqueDelegates';
import { UNIQUE_DELEGATES_CARD_METADATA } from './ZoneOverviewUniqueDelegates.metadata';

import { ZoneOverviewUniqueDelegatesProps } from '.';

export function ZoneOverviewUniqueDelegates({ className }: ZoneOverviewUniqueDelegatesProps) {
  const { data, loading } = useZoneOverviewUniqueDelegates();

  return (
    <OverviewChartCard
      className={className}
      title="Delegates"
      data={data}
      loading={loading}
      metadata={UNIQUE_DELEGATES_CARD_METADATA}
    />
  );
}
