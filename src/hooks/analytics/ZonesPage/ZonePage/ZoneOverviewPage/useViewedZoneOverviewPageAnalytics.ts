import { useEffect } from 'react';

import { Page, PAGE_TITLE } from 'hooks/analytics/Types';
import { trackEvent } from 'hooks/analytics/useAnalytics';

export function useViewedZoneOverviewPageAnalytics(currentPage: Page, prevPage: Page) {
  useEffect(() => {
    if (currentPage?.title !== PAGE_TITLE.ZoneOverview) return;

    const defaultProps = {
      period: currentPage.search.period,
      zone: currentPage.pathname.split('/')[2],
    };

    const source = getZoneOverviewSource(prevPage, currentPage);

    if (source) {
      trackEvent('viewed zone overview page', {
        referrer_url: prevPage?.title,
        source,
        ...defaultProps,
      });
    }
  }, [currentPage, prevPage]);
}

function getZoneOverviewSource(prevPage: Page, currentPage: Page) {
  if (!prevPage) {
    return 'direct link';
  } else if (
    prevPage.title === currentPage.title &&
    currentPage.pathname.split('/')[2] !== prevPage.pathname.split('/')[2]
  ) {
    return 'zone switcher';
  } else if (prevPage.title === PAGE_TITLE.ZonePeers) {
    return 'zone subtab';
  } else if (prevPage.title === PAGE_TITLE.HomeOverview) {
    return 'sidebar';
  }
}
