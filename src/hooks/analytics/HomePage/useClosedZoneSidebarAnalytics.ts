import { useEffect } from 'react';

import { getZoneNameFromHomePageQuery } from './utils';
import { Page, PAGE_TITLE } from '../Types';
import { trackEvent } from '../useAnalytics';

type ClosedZoneSidebarSource = 'zone overview sidebar' | 'zone peers sidebar';

export function useClosedZoneSidebarAnalytics(currentPage: Page, prevPage: Page) {
  useEffect(() => {
    const source = getPageSource(prevPage, currentPage);
    if (source) {
      trackEvent('closed zone sidebar', {
        source,
        period: currentPage.search.period,
        zone: getZoneNameFromHomePageQuery(prevPage),
      });
    }
  }, [currentPage, prevPage]);
}

function getPageSource(prevPage: Page, currentPage: Page): ClosedZoneSidebarSource | undefined {
  if (!prevPage) {
    return undefined;
  }

  if (currentPage.title === PAGE_TITLE.Home) {
    if (prevPage.title === PAGE_TITLE.HomeOverview) {
      return 'zone overview sidebar';
    } else if (prevPage.title === PAGE_TITLE.HomePeers) {
      return 'zone peers sidebar';
    }
  }
  return undefined;
}
