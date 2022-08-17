import { useEffect } from 'react';

import { ColumnKeys } from 'pages/AssetsPage/AssetsTable/Types';

import { Page, PAGE_TITLE } from '../Types';
import { trackEvent } from '../useAnalytics';

const ASSETS_PAGE_COLUMN_TITLE: Record<string, string> = {
  [ColumnKeys.MarketCap]: 'market cap',
  [ColumnKeys.Price]: 'price',
  [ColumnKeys.Price24hPercent]: '24h % price',
  [ColumnKeys.Price7dPercent]: '7d % price',
  [ColumnKeys.Volume24h]: '24h volume',
  [ColumnKeys.Volume24hPercent]: '24h % volume',
  [ColumnKeys.Supply]: 'supply',
};

export function useSortedAssetsListAnalytics(currentPage: Page, prevPage: Page) {
  useEffect(() => {
    if (currentPage?.title !== PAGE_TITLE.Assets) return;

    if (
      prevPage?.title === PAGE_TITLE.Assets &&
      currentPage.search.columnKey &&
      prevPage?.search.columnKey &&
      currentPage.search.columnKey !== prevPage?.search.columnKey
    ) {
      trackEvent('sorted assets list', {
        param: ASSETS_PAGE_COLUMN_TITLE[currentPage.search.columnKey as string],
      });
    }
  }, [currentPage, prevPage]);
}
