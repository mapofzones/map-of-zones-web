import { useCallback } from 'react';

import { useSearchParams } from 'react-router-dom';

import { trackEvent } from 'hooks/analytics/useAnalytics';
import { useSelectedZone } from 'pages/HomePage/MapContainer/Map/hooks/eventHooks';

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
