import { useCallback } from 'react';

import { useLocation } from 'react-router-dom';

import { getPageTitle, trackEvent } from '../useAnalytics';

export function useGlobalSearchOpenedAnalitics(): () => void {
  const location = useLocation();

  const title = getPageTitle(location.pathname);

  const trackOpenedGlobalSearch = useCallback(() => {
    trackEvent('triggered search', {
      source: title,
    });
  }, [title]);

  return trackOpenedGlobalSearch;
}
