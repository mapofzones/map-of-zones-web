import { useEffect, useState } from 'react';

import * as amplitude from '@amplitude/analytics-browser';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

import { homePath, assetsPath, overviewPath, peersPath, zonesPath } from 'routing';

import useDebounce from '../useDebounce';
import { useAssetsPageAnalytics } from './AssetsPage/useAssetsPageAnalytics';
import { useHomePageAnalytics } from './HomePage/useHomePageAnalytics';
import { useMultipageAnalytics } from './Multipage/useMultipageAnalytics';
import { Page, PAGE_TITLE } from './Types';
import { useZonesPageAnalytics } from './ZonesPage/useZonesPageAnalytics';

export const trackEvent = (event: string, data?: object) => {
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === 'production') {
    if (process.env.REACT_APP_AMPLITUDE_KEY) {
      amplitude.init(process.env.REACT_APP_AMPLITUDE_KEY);
      amplitude.logEvent(event, data);
    }
  } else {
    console.log('event:', event, data);
  }
};

const getPageTitle = (pathname: string | null) => {
  if (!pathname) return '';

  if (pathname.includes(`/${homePath}`)) {
    if (pathname.includes(`/${overviewPath}`)) return PAGE_TITLE.HomeOverview;
    if (pathname.includes(`/${peersPath}`)) return PAGE_TITLE.HomePeers;

    return PAGE_TITLE.Home;
  }

  if (pathname.includes(`/${zonesPath}`)) {
    if (pathname.includes(`/${overviewPath}`)) return PAGE_TITLE.ZoneOverview;
    if (pathname.includes(`/${peersPath}`)) return PAGE_TITLE.ZonePeers;

    return PAGE_TITLE.ZonesList;
  }

  if (pathname === `/${assetsPath}`) return PAGE_TITLE.Assets;

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

  useMultipageAnalytics(currentPage, prevPage, history);
  useHomePageAnalytics(currentPage, prevPage);
  useZonesPageAnalytics(currentPage, prevPage);
  useAssetsPageAnalytics(currentPage, prevPage);

  return trackEvent;
}
