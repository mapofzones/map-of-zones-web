import { useState } from 'react';

import { OverviewCardPeriod, OverviewChartCard } from 'components/OverviewChartCard';

import { useZoneOverviewActiveUsersCard } from './useZoneOverviewActiveUsersCard';
import { ACTIVE_USERS_CARD_METADATA } from './ZoneOverviewActiveUsers.metadata';

import { ZoneOverviewActiveUsersProps } from '.';

export function ZoneOverviewActiveUsers({ className }: ZoneOverviewActiveUsersProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<OverviewCardPeriod>('1w');
  const { data, loading } = useZoneOverviewActiveUsersCard(selectedPeriod);

  return (
    <OverviewChartCard
      className={className}
      title="Daily Active Addresses"
      data={data}
      chartData={data?.chart ?? []}
      loading={loading}
      metadata={ACTIVE_USERS_CARD_METADATA}
      onPeriodSelected={(period) => setSelectedPeriod(period)}
    />
  );
}
