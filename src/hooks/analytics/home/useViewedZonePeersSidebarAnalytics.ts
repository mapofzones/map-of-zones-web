import { useEffect } from 'react';

import { Page, PAGE_TITLE } from '../Types';
import { trackEvent } from '../useAnalytics';

type ZonePeersSidebarSource = 'zone overview sidebar' | 'direct link' | 'share link'; // TODO: added shared link to analytics

export function useViewedZonePeersSidebarAnalytics(currentPage: Page, prevPage: Page) {
  useEffect(() => {
    if (currentPage?.title !== PAGE_TITLE.HomePeers) return;

    const defaultProps = {
      period: currentPage.search.period,
      zone: currentPage.pathname.split('/')[2],
    };

    const source = getZonePeersSource(prevPage);
    trackEvent('viewed zone peers sidebar', {
      referrer_url: prevPage?.title,
      source,
      ...defaultProps,
    });
  }, [currentPage, prevPage]);
}

function getZonePeersSource(prevPage: Page): ZonePeersSidebarSource | undefined {
  if (!prevPage) {
    return 'direct link';
  } else if (prevPage.title === PAGE_TITLE.HomeOverview) {
    return 'zone overview sidebar';
  }
  return undefined;
}
