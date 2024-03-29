import { useCallback } from 'react';

import { useSearchParams } from 'react-router-dom';

import { trackEvent } from '../useAnalytics';

export type HeaderMenuTab = 'home' | 'zones' | 'assets' | 'swap';

export function useHeaderMenuClicksAnalytics() {
  const [searchParams] = useSearchParams();
  const period = searchParams.get('period');

  const trackHeaderMenuTabClick = useCallback(
    (tab: HeaderMenuTab) => {
      trackEvent('selected tab', {
        period,
        tab,
      });
    },
    [period]
  );

  return trackHeaderMenuTabClick;
}
