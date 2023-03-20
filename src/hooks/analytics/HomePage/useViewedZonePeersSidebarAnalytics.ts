import { useEffect } from 'react';

import { getZoneNameFromHomePageQuery } from './utils';
import { Page, PAGE_TITLE } from '../Types';
import { trackEvent } from '../useAnalytics';

type ZonePeersSidebarSource = 'zone overview sidebar' | 'direct link' | 'share link'; // TODO: added shared link to analytics

export function useViewedZonePeersSidebarAnalytics(currentPage: Page, prevPage: Page) {
  useEffect(() => {
    if (currentPage?.title !== PAGE_TITLE.HomePeers) return;

    const defaultProps = {
      period: currentPage.search.period,
      zone: getZoneNameFromHomePageQuery(currentPage),
    };

    const source = getZonePeersSource(prevPage, currentPage);
    trackEvent('viewed zone peers sidebar', {
      referrer_url: prevPage?.title,
      source,
      ...defaultProps,
    });
  }, [currentPage, prevPage]);
}

function getZonePeersSource(prevPage: Page, currentPage: Page): ZonePeersSidebarSource | undefined {
  if (!prevPage) {
    if (currentPage.search.utm_source) {
      return 'share link';
    }
    return 'direct link';
  } else if (prevPage.title === PAGE_TITLE.HomeOverview) {
    return 'zone overview sidebar';
  }
  return undefined;
}
