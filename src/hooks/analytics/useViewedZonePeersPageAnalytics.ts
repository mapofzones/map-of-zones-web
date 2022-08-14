import { useEffect } from 'react';

import { Page, PAGE_TITLE } from './Types';
import { trackEvent } from './useAnalytics';

export function useViewedZonePeersPageAnalytics(currentPage: Page, prevPage: Page) {
  useEffect(() => {
    if (currentPage?.title !== PAGE_TITLE.ZonePeers) return;

    const defaultProps = {
      period: currentPage.search.period,
      zone: currentPage.pathname.split('/')[2],
    };

    let source = '';

    if (!prevPage) {
      source = 'direct link';
    } else if (
      prevPage.title === currentPage.title &&
      defaultProps.zone !== prevPage.pathname.split('/')[2]
    ) {
      source = 'zone switcher';
    } else if (prevPage.title === PAGE_TITLE.ZoneOverview) {
      source = 'zone subtab';
    } else if (prevPage.title === PAGE_TITLE.HomePeers) {
      source = 'sidebar';
    }

    if (source) {
      trackEvent('viewed zone peers page', {
        referrer_url: prevPage?.title,
        source,
        ...defaultProps,
      });
    }
  }, [currentPage, prevPage]);
}
