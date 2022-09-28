import { useEffect } from 'react';

import { Page, PAGE_TITLE } from '../Types';
import { trackEvent } from '../useAnalytics';

export function useChangedZoneAnalytics(currentPage: Page, prevPage: Page) {
  useEffect(() => {
    if (
      currentPage?.title === prevPage?.title &&
      (currentPage?.title === PAGE_TITLE.ZoneOverview ||
        currentPage?.title === PAGE_TITLE.ZonePeers) &&
      currentPage.pathname.split('/')[2] !== prevPage.pathname.split('/')[2]
    ) {
      trackEvent('changed zone', {
        zone: currentPage.pathname.split('/')[2],
        referrerZone: prevPage.pathname.split('/')[2],
        source:
          currentPage?.title === PAGE_TITLE.ZoneOverview ? 'zone overview page' : 'zone peers page',
        period: currentPage.search.period,
      });
    }
  }, [currentPage, prevPage]);
}
