import { useCallback } from 'react';

import { useSearchParams } from 'react-router-dom';

import { useSelectedZone } from 'pages/HomePage/Map/hooks/eventHooks';

import { trackEvent } from '../useAnalytics';

export function useSwitchedTokenInfoChartAnalytics() {
  const [searchParams] = useSearchParams();
  const [zone = ''] = useSelectedZone();

  const period = searchParams.get('period');

  const trackSelectedChartType = useCallback(
    (selectedChartType: string | undefined) => {
      trackEvent('changed token info', {
        period,
        zone,
        param: selectedChartType,
      });
    },
    [period, zone]
  );

  return trackSelectedChartType;
}
