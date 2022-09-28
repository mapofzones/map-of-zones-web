import { useEffect } from 'react';

import { Page, PAGE_TITLE } from 'hooks/analytics/Types';
import { trackEvent } from 'hooks/analytics/useAnalytics';

export function useSelectedZoneAnalytics(currentPage: Page, prevPage: Page) {
  useEffect(() => {
    if (
      currentPage?.title === PAGE_TITLE.ZoneOverview &&
      prevPage?.title === PAGE_TITLE.ZonesList
    ) {
      trackEvent('selected zone', {
        period: currentPage.search.period,
        zone: currentPage.pathname.split('/')[2],
      });
    }
  }, [currentPage, prevPage]);
}
