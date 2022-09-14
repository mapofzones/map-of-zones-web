import { useEffect } from 'react';

import { Page, PAGE_TITLE } from '../Types';
import { trackEvent } from '../useAnalytics';

export type ZoneOverviewSidebarSource =
  | 'sidebar view'
  | 'map view'
  | 'direct link'
  | 'share link' // TODO: added shared link to analytics
  | 'zone peers sidebar'
  | 'unknown';

export function useViewedZoneOverviewSidebarAnalytics(currentPage: Page, prevPage: Page) {
  useEffect(() => {
    if (currentPage?.title !== PAGE_TITLE.HomeOverview) return;

    const defaultProps = {
      period: currentPage.search.period,
      zone: currentPage.pathname.split('/')[2],
    };

    const source = getZoneOverviewSource(prevPage, currentPage);
    trackEvent('viewed zone overview sidebar', {
      referrer_url: prevPage?.title,
      source,
      ...defaultProps,
    });
  }, [currentPage, prevPage]);
}

function getZoneOverviewSource(
  prevPage: Page,
  currentPage: Page
): ZoneOverviewSidebarSource | undefined {
  if (!prevPage) {
    return 'direct link';
  } else if (prevPage.title === PAGE_TITLE.HomePeers) {
    return 'zone peers sidebar';
  } else if (prevPage.title === PAGE_TITLE.Home) {
    return (currentPage.state.source as ZoneOverviewSidebarSource) ?? 'unknown';
  }
  return undefined;
}
