import { useEffect } from 'react';

import { ColumnKeys } from 'pages/HomePage/Types';

import { HOME_PAGE_TABLE_COLUMN_TITLE } from './useViewedHomePageAnalytics';
import { Page, PAGE_TITLE } from '../Types';
import { trackEvent } from '../useAnalytics';

export function useSortedHomePageZonesListAnalytics(currentPage: Page, prevPage: Page) {
  useEffect(() => {
    if (currentPage?.title !== PAGE_TITLE.Home) return;

    if (
      prevPage?.title === PAGE_TITLE.Home &&
      currentPage?.search.columnKey &&
      prevPage?.search.columnKey &&
      currentPage.search.columnKey !== prevPage?.search.columnKey
    ) {
      trackEvent('sorted sidebar', {
        param: HOME_PAGE_TABLE_COLUMN_TITLE[currentPage.search.columnKey as ColumnKeys],
        period: currentPage.search.period,
      });
    }
  }, [currentPage, prevPage]);
}
