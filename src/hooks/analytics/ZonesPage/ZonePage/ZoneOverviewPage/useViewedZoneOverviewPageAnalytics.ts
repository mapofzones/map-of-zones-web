import { useEffect } from 'react';

import { getZoneNameFromHomePageQuery } from 'hooks/analytics/HomePage/utils';
import { Page, PAGE_TITLE } from 'hooks/analytics/Types';
import { trackEvent } from 'hooks/analytics/useAnalytics';

export function useViewedZoneOverviewPageAnalytics(currentPage: Page, prevPage: Page) {
  useEffect(() => {
    if (currentPage?.title !== PAGE_TITLE.ZoneOverview) return;

    const defaultProps = {
      period: currentPage.search.period,
      zone: getZoneNameFromHomePageQuery(currentPage),
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
    getZoneNameFromHomePageQuery(currentPage) !== getZoneNameFromHomePageQuery(prevPage)
  ) {
    return 'zone switcher';
  } else if (prevPage.title === PAGE_TITLE.ZonePeers) {
    return 'zone subtab';
  } else if (prevPage.title === PAGE_TITLE.HomeOverview) {
    return 'sidebar';
  }
}
