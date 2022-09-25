import { useEffect } from 'react';

import { ColumnKeys } from 'pages/HomePage/Types';

import { Page, PAGE_TITLE } from '../Types';
import { trackEvent } from '../useAnalytics';

type HomePageSource = 'direct link' | 'share link' | 'menu';
type HomePageParam = 'ibc volume' | 'total txs' | 'ibc transfers' | 'active users';

export const HOME_PAGE_TABLE_COLUMN_TITLE: Record<ColumnKeys, HomePageParam> = {
  [ColumnKeys.IbcVolume]: 'ibc volume',
  [ColumnKeys.IbcTransfers]: 'ibc transfers',
  [ColumnKeys.TotalTxs]: 'total txs',
  [ColumnKeys.Dau]: 'active users',
};

export function useViewedHomePageAnalytics(currentPage: Page, prevPage: Page) {
  useEffect(() => {
    if (currentPage?.title !== PAGE_TITLE.Home) return;

    const source = getHomePageSource(prevPage, currentPage);
    if (source) {
      trackEvent('viewed home page', {
        referrer_url: prevPage?.title,
        period: currentPage.search.period,
        param: currentPage.search.columnKey
          ? HOME_PAGE_TABLE_COLUMN_TITLE[currentPage.search.columnKey as ColumnKeys]
          : '',
        source: source,
      });
    }
  }, [currentPage, prevPage]);
}

function getHomePageSource(prevPage: Page, currentPage: Page): HomePageSource | undefined {
  if (!prevPage) {
    if (currentPage.search.utm_source) {
      return 'share link';
    }
    return 'direct link';
  } else if (prevPage.title !== currentPage.title) {
    return 'menu';
  }
  return undefined;
}
