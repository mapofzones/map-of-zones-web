import { useEffect } from 'react';

import { ColumnKeys } from 'pages/HomePage/Types';

import { HOME_PAGE_TABLE_COLUMN_TITLE } from './useViewedHomePageAnalytics';
import { getZoneNameFromHomePageQuery } from './utils';
import { Page, PAGE_TITLE } from '../Types';
import { trackEvent } from '../useAnalytics';

export function useSwitchedMapTypeAnalytics(currentPage: Page, prevPage: Page) {
  useEffect(() => {
    const possiblePages = [PAGE_TITLE.Home, PAGE_TITLE.HomeOverview, PAGE_TITLE.HomePeers];
    if (!possiblePages.includes(currentPage?.title)) {
      return;
    }

    if (
      possiblePages.includes(prevPage?.title) &&
      currentPage?.search.mapType &&
      currentPage.search.mapType !== prevPage?.search.mapType
    ) {
      trackEvent('changed map type', {
        title: currentPage?.title,
        param: HOME_PAGE_TABLE_COLUMN_TITLE[currentPage.search.columnKey as ColumnKeys],
        period: currentPage.search.period,
        mapType: currentPage.search.mapType,
        zone: getZoneNameFromHomePageQuery(currentPage),
      });
    }
  }, [currentPage, prevPage]);
}
