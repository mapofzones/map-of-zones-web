import { useState } from 'react';

import { OverviewChartCard } from 'components/OverviewChartCardWithMetadata';
import { AnalysisCardPeriod } from 'types/AnalysisCardPeriod';

import { useZoneOverviewUniqueDelegates } from './useZoneOverviewUniqueDelegates';
import { UNIQUE_DELEGATES_CARD_METADATA } from './ZoneOverviewUniqueDelegates.metadata';

import { ZoneOverviewUniqueDelegatesProps } from '.';

export function ZoneOverviewUniqueDelegates({ className }: ZoneOverviewUniqueDelegatesProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<AnalysisCardPeriod>('1w');
  const { data, loading } = useZoneOverviewUniqueDelegates(selectedPeriod);

  return (
    <OverviewChartCard
      className={className}
      title="Unique Delegators"
      data={data}
      chartData={data?.chart ?? []}
      loading={loading}
      metadata={UNIQUE_DELEGATES_CARD_METADATA}
      onPeriodSelected={setSelectedPeriod}
    />
  );
}
