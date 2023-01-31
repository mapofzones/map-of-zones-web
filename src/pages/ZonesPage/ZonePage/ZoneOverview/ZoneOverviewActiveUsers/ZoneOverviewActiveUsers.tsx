import { OverviewChartCard } from 'components/OverviewChartCard';

import { useZoneOverviewActiveUsersCard } from './useZoneOverviewActiveUsersCard';
import { ACTIVE_USERS_CARD_METADATA } from './ZoneOverviewActiveUsers.metadata';

import { ZoneOverviewActiveUsersProps } from '.';

export function ZoneOverviewActiveUsers({ className }: ZoneOverviewActiveUsersProps) {
  const { data, loading } = useZoneOverviewActiveUsersCard();

  return (
    <OverviewChartCard
      className={className}
      title="Active Users"
      data={data}
      chartData={data?.chart ?? []}
      loading={loading}
      metadata={ACTIVE_USERS_CARD_METADATA}
    />
  );
}
