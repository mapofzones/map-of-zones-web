import { OverviewChartCard } from 'components/OverviewChartCard';

import { useZoneOverviewDelegations } from './useZoneOverviewDelegations';
import { DELEGATIONS_CARD_METADATA } from './ZoneOverviewDelegations.metadata';

import { ZoneOverviewDelegationsProps } from '.';

export function ZoneOverviewDelegations({ className }: ZoneOverviewDelegationsProps) {
  const { data, loading } = useZoneOverviewDelegations();

  return (
    <OverviewChartCard
      className={className}
      title="Delegations"
      data={data}
      loading={loading}
      metadata={DELEGATIONS_CARD_METADATA}
    />
  );
}
