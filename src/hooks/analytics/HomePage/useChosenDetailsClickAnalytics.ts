import { useEffect } from 'react';

import { getZoneNameFromHomePageQuery } from './utils';
import { Page, PAGE_TITLE } from '../Types';
import { trackEvent } from '../useAnalytics';

type ChosenDetailsSource = 'sidebar list' | 'zone overview sidebar' | 'zone peers sidebar';

export function useChosenDetailsClickAnalytics(currentPage: Page, prevPage: Page) {
  useEffect(() => {
    const source = getZonePageSource(prevPage, currentPage);
    if (source) {
      trackEvent('chosen details', {
        source,
        period: currentPage.search.period,
        zone: getZoneNameFromHomePageQuery(currentPage),
      });
    }
  }, [currentPage, prevPage]);
}

function getZonePageSource(prevPage: Page, currentPage: Page): ChosenDetailsSource | undefined {
  if (!prevPage) {
    return undefined;
  }

  if (prevPage.title === PAGE_TITLE.HomeOverview && currentPage.title === PAGE_TITLE.ZoneOverview) {
    return 'zone overview sidebar';
  } else if (
    prevPage.title === PAGE_TITLE.HomePeers &&
    currentPage.title === PAGE_TITLE.ZonePeers
  ) {
    return 'zone peers sidebar';
  } else if (prevPage.title === PAGE_TITLE.Home && currentPage.title === PAGE_TITLE.ZonesList) {
    return 'sidebar list';
  }
  return undefined;
}
