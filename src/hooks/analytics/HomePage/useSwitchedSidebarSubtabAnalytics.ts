import { useEffect } from 'react';

import { getZoneNameFromHomePageQuery } from './utils';
import { Page, PAGE_TITLE } from '../Types';
import { trackEvent } from '../useAnalytics';

export function useSwitchedSidebarSubtabAnalytics(currentPage: Page, prevPage: Page) {
  useEffect(() => {
    if (!currentPage?.title) return;

    if (
      (currentPage.title === PAGE_TITLE.HomePeers && prevPage?.title === PAGE_TITLE.HomeOverview) ||
      (currentPage.title === PAGE_TITLE.HomeOverview && prevPage?.title === PAGE_TITLE.HomePeers)
    ) {
      trackEvent('switched sidebar subtab', {
        subtab: currentPage.title === PAGE_TITLE.HomePeers ? 'peers subtab' : 'overview subtab',
        zone: getZoneNameFromHomePageQuery(currentPage),
      });
    }
  }, [currentPage, prevPage]);
}
