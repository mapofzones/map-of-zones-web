import { useEffect, useState } from 'react';

import { init, track } from '@amplitude/analytics-browser';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

import { ColumnKeys as AssetsPageColumnKeys } from 'pages/AssetsPage/AssetsTable/Types';
import { ColumnKeys as ZonesPageColumnKeys } from 'pages/ZonesPage/ZonesInfo/ZonesTable/Types';

import useDebounce from './useDebounce';

if (process.env.NODE_ENV === 'production' && process.env.REACT_APP_AMPLITUDE_KEY) {
  init(process.env.REACT_APP_AMPLITUDE_KEY);
}

const PAGE_TITLE: Record<string, string> = {
  Assets: 'assets page',
  Home: 'home',
  ZoneOverview: 'zone overview page',
  ZonePeers: 'zone peers page',
  ZonesList: 'zones list page',
};

const ASSETS_PAGE_COLUMN_TITLE: Record<string, string> = {
  [AssetsPageColumnKeys.MarketCap]: 'market cap',
  [AssetsPageColumnKeys.Price]: 'price',
  [AssetsPageColumnKeys.Price24hPercent]: '24h % price',
  [AssetsPageColumnKeys.Price7dPercent]: '7d % price',
  [AssetsPageColumnKeys.Volume24h]: '24h volume',
  [AssetsPageColumnKeys.Volume24hPercent]: '24h % volume',
  [AssetsPageColumnKeys.Supply]: 'supply',
};

const ZONES_PAGE_COLUMN_TITLE: Record<string, string> = {
  [ZonesPageColumnKeys.IbcActiveAddresses]: 'active users',
  [ZonesPageColumnKeys.IbcTransfers]: 'ibc transfers',
  [ZonesPageColumnKeys.IbcVolume]: 'ibc volume',
  [ZonesPageColumnKeys.IbcVolumeReceived]: 'volume in',
  [ZonesPageColumnKeys.IbcVolumeSent]: 'volume out',
  [ZonesPageColumnKeys.TotalTxs]: 'total txs',
};

export function useAnalytics() {
  const location = useLocation();

  const [history, setHistory] = useState<any[]>([]);

  const debouncedLocation = useDebounce(location, 500);

  const trackEvent = (event: string, data: object) => {
    if (process.env.NODE_ENV === 'production') {
      track(event, data);
    } else {
      console.log('track event:', { event, data });
    }
  };

  useEffect(() => {
    if (debouncedLocation) {
      setHistory((prevState) => {
        if (prevState[prevState.length - 1] !== debouncedLocation) {
          return [...prevState, debouncedLocation];
        }

        return prevState;
      });
    }
  }, [debouncedLocation]);

  useEffect(() => {
    console.log(history);

    const getPageTitle = (pathname: string | null) => {
      if (!pathname) return '';

      if (pathname.includes('/home')) return PAGE_TITLE.Home;

      if (pathname.includes('/zones')) {
        if (pathname.includes('overview')) return PAGE_TITLE.ZoneOverview;
        if (pathname.includes('peers')) return PAGE_TITLE.ZonePeers;

        return PAGE_TITLE.ZonesList;
      }

      if (pathname === '/assets') return PAGE_TITLE.Assets;

      return '';
    };

    const currentPage = history[history.length - 1];
    const prevPage = history[history.length - 2];

    if (currentPage) {
      const currentPageSearch = queryString.parse(currentPage.search);
      const currentPageTitle = getPageTitle(currentPage.pathname);

      const prevPageTitle = getPageTitle(prevPage?.pathname);

      // Overall
      trackEvent('viewed application page', {
        page_title: currentPageTitle,
        referrer_url: prevPageTitle,
        default_period: currentPageSearch.period,
        visit_number: history.filter(({ pathname }) => pathname === currentPage.pathname).length,
      });

      // Zones list
      // TODO: viewed zones list page
      // TODO: scrolled zones list
      if (currentPageTitle === PAGE_TITLE.ZoneOverview && prevPageTitle === PAGE_TITLE.ZonesList) {
        trackEvent('selected zone', {
          zone: currentPage.pathname.split('/')[2],
          period: currentPageSearch.period,
        });
      }

      if (currentPageTitle === PAGE_TITLE.ZonesList) {
        trackEvent('sorted zones list', {
          param: ZONES_PAGE_COLUMN_TITLE[currentPageSearch.columnKey as string],
          period: currentPageSearch.period,
        });
      }

      // Asset list
      // TODO: viewed assets page
      // TODO: scrolled assets list
      if (currentPageTitle === PAGE_TITLE.Assets) {
        console.log('hello');
        trackEvent('sorted assets list', {
          param: ASSETS_PAGE_COLUMN_TITLE[currentPageSearch.columnKey as string],
        });
      }
    }
  }, [history]);

  return trackEvent;
}
