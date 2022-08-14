import { useEffect } from 'react';

import { Page, PAGE_TITLE } from './Types';
import { trackEvent } from './useAnalytics';

export function useViewedAssetsPageAnalytics(currentPage: Page, prevPage: Page) {
  useEffect(() => {
    if (currentPage?.title === PAGE_TITLE.Assets && prevPage?.title !== PAGE_TITLE.Assets) {
      trackEvent('viewed assets page', {
        referrer_url: prevPage?.title,
        source: prevPage ? 'menu' : 'direct link',
      });
    }
  }, [currentPage, prevPage]);
}
