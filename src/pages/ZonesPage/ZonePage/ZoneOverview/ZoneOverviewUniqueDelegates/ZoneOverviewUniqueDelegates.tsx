import { OverviewChartCard } from 'components/OverviewChartCard';
import { useLastChartPointByDate } from 'hooks/useLastChartPointByDate';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import { useZoneOverviewUniqueDelegates } from './useZoneOverviewUniqueDelegates';
import { UNIQUE_DELEGATES_CARD_METADATA } from './ZoneOverviewUniqueDelegates.metadata';

import { ZoneOverviewUniqueDelegatesProps } from '.';

export function ZoneOverviewUniqueDelegates({ className }: ZoneOverviewUniqueDelegatesProps) {
  const [period] = useSelectedPeriod();
  const { data, loading } = useZoneOverviewUniqueDelegates();

  const chartData = useLastChartPointByDate(data?.chart ?? [], period);

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
