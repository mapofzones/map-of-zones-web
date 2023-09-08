import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { Page, PAGE_TITLE } from 'hooks/analytics/Types';
import { trackEvent } from 'hooks/analytics/useAnalytics';

import { SelectedZoneOverviewSource } from '../ZonePage/ZoneOverviewPage/useViewedZoneOverviewPageAnalytics';

export enum SelectedZonesComparisonSource {
  GlobalSearch = SelectedZoneOverviewSource.GlobalSearch,
  OverviewCompareButton = 'overview compare btn',
  FooterCompareButton = 'footer compare btn',
}

export function useViewedZonesComparisonPageAnalytics(currentPage: Page, prevPage: Page) {
  const { state } = useLocation();

  useEffect(() => {
    if (currentPage?.title !== PAGE_TITLE.ZonesComparison) return;

    const source = getZoneOverviewSource(prevPage, currentPage, state);

    if (source) {
      trackEvent('viewed zones comparison page', {
        source,
        referrer_url: prevPage?.title,
        zones: currentPage?.search?.zones,
      });
    }
  }, [currentPage, prevPage, state]);
}

function getZoneOverviewSource(prevPage: Page, currentPage: Page, state: any) {
  if (!prevPage) {
    return 'direct link';
  } else if (state?.source) {
    return state.source;
  }
  return 'unknown';
}
