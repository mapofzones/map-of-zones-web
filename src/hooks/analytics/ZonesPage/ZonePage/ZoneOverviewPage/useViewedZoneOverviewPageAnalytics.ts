import { useEffect } from 'react';

import { useLocation, Location } from 'react-router-dom';

import { getZoneNameFromHomePageQuery } from 'hooks/analytics/HomePage/utils';
import { Page, PAGE_TITLE } from 'hooks/analytics/Types';
import { trackEvent } from 'hooks/analytics/useAnalytics';

export enum SelectedZoneOverviewSource {
  GlobalSearch = 'global search',
  Map = 'map',
}

export function useViewedZoneOverviewPageAnalytics(currentPage: Page, prevPage: Page) {
  const { state } = useLocation();

  useEffect(() => {
    if (currentPage?.title !== PAGE_TITLE.ZoneOverview) return;

    const defaultProps = {
      period: prevPage?.search?.period,
      zone: getZoneNameFromHomePageQuery(currentPage),
    };

    const source = getZoneOverviewSource(prevPage, currentPage, state);

    if (source) {
      trackEvent('viewed zone overview page', {
        referrer_url: prevPage?.title,
        source,
        ...defaultProps,
      });
    }
  }, [currentPage, prevPage, state]);
}

function getZoneOverviewSource(prevPage: Page, currentPage: Page, state: any) {
  if (!prevPage) {
    return 'direct link';
  } else if (state?.source) {
    return state.source;
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
