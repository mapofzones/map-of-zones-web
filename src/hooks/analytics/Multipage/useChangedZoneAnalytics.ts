import { useEffect } from 'react';

import { getZoneNameFromHomePageQuery } from '../HomePage/utils';
import { Page, PAGE_TITLE } from '../Types';
import { trackEvent } from '../useAnalytics';

export function useChangedZoneAnalytics(currentPage: Page, prevPage: Page) {
  useEffect(() => {
    const currentZone = getZoneNameFromHomePageQuery(currentPage);
    const referrerZone = getZoneNameFromHomePageQuery(prevPage);
    if (
      currentPage?.title === prevPage?.title &&
      (currentPage?.title === PAGE_TITLE.ZoneOverview ||
        currentPage?.title === PAGE_TITLE.ZonePeers) &&
      currentZone !== referrerZone
    ) {
      trackEvent('changed zone', {
        zone: currentPage,
        referrerZone,
        source:
          currentPage?.title === PAGE_TITLE.ZoneOverview ? 'zone overview page' : 'zone peers page',
        period: currentPage.search.period,
      });
    }
  }, [currentPage, prevPage]);
}
