import { useCallback } from 'react';

import { trackEvent } from '../useAnalytics';

export function useGlobalSearchItemSelectedAnalytics(): (selectedZone: string | undefined) => void {
  const trackSelectedGlobalSearchItem = useCallback((selectedZone: string | undefined) => {
    trackEvent('global search', {
      searched_entity: 'zone',
      zone: selectedZone,
    });
  }, []);

  return trackSelectedGlobalSearchItem;
}
