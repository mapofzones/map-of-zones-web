import { useEffect, useState } from 'react';

import { init } from '@amplitude/analytics-browser';
// import { init, track } from '@amplitude/analytics-browser';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

import useDebounce from '../useDebounce';
import { Page, PAGE_TITLE } from './Types';
import { useChangedPeriodAnalytics } from './useChangedPeriodAnalytics';
import { usePageScrollAnalytics } from './usePageScrollAnalytics';
import { useSelectedZoneAnalytics } from './useSelectedZoneAnalytics';
import { useSortedAssetsListAnalytics } from './useSortedAssetsListAnalytics';
import { useSortedZonePeersListAnalytics } from './useSortedZonePeersListAnalytics';
import { useSortedZonesListAnalytics } from './useSortedZonesListAnalytics';
import { useSwitchedZoneSubtabAnalytics } from './useSwitchedZoneSubtabAnalytics';
import { useViewedApplicationPageAnalytics } from './useViewedApplicationPageAnalytics';
import { useViewedAssetsPageAnalytics } from './useViewedAssetsPageAnalytics';
import { useViewedZonePeersPageAnalytics } from './useViewedZonePeersPageAnalytics';
import { useViewedZonesListPageAnalytics } from './useViewedZonesListPageAnalytics';

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

  useChangedPeriodAnalytics(currentPage, prevPage);
  usePageScrollAnalytics(currentPage);
  useSelectedZoneAnalytics(currentPage, prevPage);
  useSortedAssetsListAnalytics(currentPage, prevPage);
  useSortedZonePeersListAnalytics(currentPage, prevPage);
  useSortedZonesListAnalytics(currentPage, prevPage);
  useSwitchedZoneSubtabAnalytics(currentPage, prevPage);
  useViewedApplicationPageAnalytics(currentPage, prevPage, history);
  useViewedAssetsPageAnalytics(currentPage, prevPage);
  useViewedZonePeersPageAnalytics(currentPage, prevPage);
  useViewedZonesListPageAnalytics(currentPage, prevPage);

  return trackEvent;
}
