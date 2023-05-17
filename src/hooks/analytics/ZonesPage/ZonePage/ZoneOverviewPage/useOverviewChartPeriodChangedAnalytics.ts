import { useCallback } from 'react';

import { AnalysisCardPeriod } from 'types/AnalysisCardPeriod';
import { useSelectedZone } from 'pages/HomePage/MapContainer/Map/hooks/eventHooks';

import { trackEvent } from './../../../useAnalytics';

export function useOverviewChartPeriodChangedAnalytics(title: string) {
  const [zone] = useSelectedZone();

  const trackChartPeriodChangedEvent = useCallback(
    (period: AnalysisCardPeriod) => {
      trackEvent('changed charts period', {
        zone,
        period,
        title,
      });
    },
    [zone, title]
  );

  return trackChartPeriodChangedEvent;
}
