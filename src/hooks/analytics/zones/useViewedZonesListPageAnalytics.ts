import { useEffect } from 'react';

import { Page, PAGE_TITLE } from '../Types';
import { trackEvent } from '../useAnalytics';

export function useViewedZonesListPageAnalytics(currentPage: Page, prevPage: Page) {
  useEffect(() => {
    if (currentPage?.title !== PAGE_TITLE.ZonesList) return;

    let source = '';

    if (!prevPage) {
      source = 'direct link';
    } else if (prevPage.title !== currentPage.title) {
      source = 'menu';
    }

    if (source) {
      trackEvent('viewed zones list page', {
        referrer_url: prevPage?.title,
        period: currentPage.search.period,
        source: source, // TODO: 'sidebar'
      });
    }
  }, [currentPage, prevPage]);
}
