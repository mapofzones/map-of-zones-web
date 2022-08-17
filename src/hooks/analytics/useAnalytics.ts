import { useEffect, useState } from 'react';

import { init } from '@amplitude/analytics-browser';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

import useDebounce from '../useDebounce';
import { useSortedAssetsListAnalytics } from './assets/useSortedAssetsListAnalytics';
import { useViewedAssetsPageAnalytics } from './assets/useViewedAssetsPageAnalytics';
import { useChangedPeriodAnalytics } from './multipage/useChangedPeriodAnalytics';
import { usePageScrollAnalytics } from './multipage/usePageScrollAnalytics';
import { useViewedApplicationPageAnalytics } from './multipage/useViewedApplicationPageAnalytics';
import { Page, PAGE_TITLE } from './Types';
import { useSelectedZoneAnalytics } from './zone/useSelectedZoneAnalytics';
import { useSwitchedZoneSubtabAnalytics } from './zone/useSwitchedZoneSubtabAnalytics';
import { useSortedZonePeersListAnalytics } from './zonePeers/useSortedZonePeersListAnalytics';
import { useViewedZonePeersPageAnalytics } from './zonePeers/useViewedZonePeersPageAnalytics';
import { useSortedZonesListAnalytics } from './zones/useSortedZonesListAnalytics';
import { useViewedZonesListPageAnalytics } from './zones/useViewedZonesListPageAnalytics';

if (process.env.NODE_ENV === 'production' && process.env.REACT_APP_AMPLITUDE_KEY) {
  init(process.env.REACT_APP_AMPLITUDE_KEY);
}

export const trackEvent = (event: string, data?: object) => {
  if (process.env.NODE_ENV === 'production') {
    // track(event, data);
    console.log('event:', event, data);
  } else {
    console.log('event:', event, data);
  }
};

const getPageTitle = (pathname: string | null) => {
  if (!pathname) return '';

  if (pathname.includes('/home')) {
    if (pathname.includes('/overview')) return PAGE_TITLE.HomeOverview;
    if (pathname.includes('/peers')) return PAGE_TITLE.HomePeers;

    return PAGE_TITLE.Home;
  }

  if (pathname.includes('/zones')) {
    if (pathname.includes('/overview')) return PAGE_TITLE.ZoneOverview;
    if (pathname.includes('/peers')) return PAGE_TITLE.ZonePeers;

    return PAGE_TITLE.ZonesList;
  }

  if (pathname === '/assets') return PAGE_TITLE.Assets;

  return '';
};

export function useAnalytics() {
  const location = useLocation();

  const [history, setHistory] = useState<Page[]>([]);

  const debouncedLocation = useDebounce(location, 500);

  const currentPage = history[history.length - 1];
  const prevPage = history[history.length - 2];

  useEffect(() => {
    if (debouncedLocation) {
      setHistory((prevState) => {
        if (prevState[prevState.length - 1]?.key !== debouncedLocation.key) {
          return [
            ...prevState,
            {
              ...debouncedLocation,
              title: getPageTitle(debouncedLocation.pathname),
              search: queryString.parse(debouncedLocation.search),
            },
          ];
        }

        return prevState;
      });
    }
  }, [debouncedLocation]);

  // assets
  useSortedAssetsListAnalytics(currentPage, prevPage);
  useViewedAssetsPageAnalytics(currentPage, prevPage);

  // multipage
  useChangedPeriodAnalytics(currentPage, prevPage);
  usePageScrollAnalytics(currentPage);
  useViewedApplicationPageAnalytics(currentPage, prevPage, history);

  // zone
  useSelectedZoneAnalytics(currentPage, prevPage);
  useSwitchedZoneSubtabAnalytics(currentPage, prevPage);

  // zonePeers
  useSortedZonePeersListAnalytics(currentPage, prevPage);
  useViewedZonePeersPageAnalytics(currentPage, prevPage);

  // zones
  useSortedZonesListAnalytics(currentPage, prevPage);
  useViewedZonesListPageAnalytics(currentPage, prevPage);

  return trackEvent;
}
