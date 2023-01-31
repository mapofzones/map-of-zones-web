import { OverviewChartCard } from 'components/OverviewChartCard';
import { useLastChartPointByDate } from 'hooks/useLastChartPointByDate';

import { useZoneOverviewUniqueDelegates } from './useZoneOverviewUniqueDelegates';
import { UNIQUE_DELEGATES_CARD_METADATA } from './ZoneOverviewUniqueDelegates.metadata';

import { ZoneOverviewUniqueDelegatesProps } from '.';

export function ZoneOverviewUniqueDelegates({ className }: ZoneOverviewUniqueDelegatesProps) {
  const { data, loading } = useZoneOverviewUniqueDelegates();

  const chartData = useLastChartPointByDate(data?.chart ?? []);

  return (
    <OverviewChartCard
      className={className}
      title="Delegates"
      data={data}
      chartData={chartData}
      loading={loading}
      metadata={UNIQUE_DELEGATES_CARD_METADATA}
    />
  );
}
