import { useState } from 'react';

import { OverviewCardPeriod, OverviewChartCard } from 'components/OverviewChartCard';
import { useLastChartPointByDate } from 'hooks/useLastChartPointByDate';

import { useZoneOverviewUniqueDelegates } from './useZoneOverviewUniqueDelegates';
import { UNIQUE_DELEGATES_CARD_METADATA } from './ZoneOverviewUniqueDelegates.metadata';

import { ZoneOverviewUniqueDelegatesProps } from '.';

export function ZoneOverviewUniqueDelegates({ className }: ZoneOverviewUniqueDelegatesProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<OverviewCardPeriod>('1w');
  const { data, loading } = useZoneOverviewUniqueDelegates(selectedPeriod);

  const chartData = useLastChartPointByDate(data?.chart ?? []);

  return (
    <OverviewChartCard
      className={className}
      title="Unique Delegators"
      data={data}
      chartData={chartData}
      loading={loading}
      metadata={UNIQUE_DELEGATES_CARD_METADATA}
      onPeriodSelected={(period) => setSelectedPeriod(period)}
    />
  );
}
