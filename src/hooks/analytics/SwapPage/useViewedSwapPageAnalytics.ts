import { useEffect } from 'react';

import { Page, PAGE_TITLE } from '../Types';
import { trackEvent } from '../useAnalytics';

type SwapPageSource = 'direct link' | 'share link' | 'menu';

export function useViewedSwapPageAnalytics(currentPage: Page, prevPage: Page) {
  useEffect(() => {
    if (currentPage?.title !== PAGE_TITLE.Swap) return;

    const source = getSwapPageSource(prevPage, currentPage);
    if (source) {
      trackEvent('viewed swap page', {
        referrer_url: prevPage?.title,
        source: source,
      });
    }
  }, [currentPage, prevPage]);
}

function getSwapPageSource(prevPage: Page, currentPage: Page): SwapPageSource | undefined {
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
