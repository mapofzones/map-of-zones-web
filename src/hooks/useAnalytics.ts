import { useEffect, useState } from 'react';

import { init, track } from '@amplitude/analytics-browser';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

import { ColumnKeys as AssetsPageColumnKeys } from 'pages/AssetsPage/AssetsTable/Types';
import { ColumnKeys as ZonesPageZonePeersColumnKeys } from 'pages/ZonesPage/ZonePage/ZonePeers/Types';
import { ColumnKeys as ZonesPageColumnKeys } from 'pages/ZonesPage/ZonesInfo/ZonesTable/Types';

import useDebounce from './useDebounce';

if (process.env.NODE_ENV === 'production' && process.env.REACT_APP_AMPLITUDE_KEY) {
  init(process.env.REACT_APP_AMPLITUDE_KEY);
}

const PAGE_TITLE: Record<string, string> = {
  Assets: 'assets page',
  Home: 'home',
  HomeOverview: 'home zone overview',
  HomePeers: 'home zone peers',
  ZoneOverview: 'zone overview page',
  ZonePeers: 'zone peers page',
  ZonesList: 'zones list page',
};

const EVENT_FOR_SCROLL_BY_PAGE_TITLE: Record<string, string> = {
  [PAGE_TITLE.Assets]: 'scroled assets list',
  [PAGE_TITLE.ZonesList]: 'scroled zones list',
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

const ZONES_PEERS_COLUMN_TITLE: Record<string, string> = {
  // total ibc volume
  [ZonesPageZonePeersColumnKeys.IbcVolumeReceived]: 'recieves',
  [ZonesPageZonePeersColumnKeys.IbcVolumeSent]: 'sends',
  [ZonesPageZonePeersColumnKeys.IbcTransfers]: 'ibc success',
  [ZonesPageZonePeersColumnKeys.IbcTransfersPending]: 'ibc pending',
  [ZonesPageZonePeersColumnKeys.IbcTransfersFailed]: 'ibc failed',
  [ZonesPageZonePeersColumnKeys.SuccessRate]: 'success rate',
};

export function useAnalytics() {
  const location = useLocation();

  const [history, setHistory] = useState<any[]>([]);

  const debouncedLocation = useDebounce(location, 500);

  const getPageTitle = (pathname: string | null) => {
    if (!pathname) return '';

    if (pathname.includes('/home')) {
      if (pathname.includes('/overview')) return PAGE_TITLE.HomeOverview;
      if (pathname.includes('/peers')) return PAGE_TITLE.HomePeers;
    }

    if (pathname.includes('/zones')) {
      if (pathname.includes('/overview')) return PAGE_TITLE.ZoneOverview;
      if (pathname.includes('/peers')) return PAGE_TITLE.ZonePeers;

      return PAGE_TITLE.ZonesList;
    }

    if (pathname === '/assets') return PAGE_TITLE.Assets;

    return '';
  };

  const trackEvent = (event: string, data?: object) => {
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

  // page scroll
  useEffect(() => {
    const eventName = EVENT_FOR_SCROLL_BY_PAGE_TITLE[getPageTitle(location.pathname)];

    const scrollListener = () => {
      if (window.scrollY > 50) {
        window.removeEventListener('scroll', scrollListener);

        trackEvent(eventName);
      }
    };

    if (eventName) {
      window.addEventListener('scroll', scrollListener);
    }

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, [location.pathname]);

  // Overall
  useEffect(() => {
    const currentPage = history[history.length - 1];
    const prevPage = history[history.length - 2];

    if (currentPage) {
      const currentPageSearch = queryString.parse(currentPage.search);
      const currentPageTitle = getPageTitle(currentPage.pathname);
      const prevPageTitle = getPageTitle(prevPage?.pathname);

      if (currentPageTitle && currentPageTitle !== prevPageTitle) {
        trackEvent('viewed application page', {
          'page title': currentPageTitle,
          'referrer url': prevPageTitle,
          'visit number': history.filter(({ pathname }) => pathname === currentPage.pathname)
            .length,
          default_period: currentPageSearch.period,
        });
      }
    }
  }, [history]);

  // zone peers
  useEffect(() => {
    // TODO: expanded peer
    // TODO: folded peer
    // TODO: viewed peers info

    const currentPage = history[history.length - 1];
    const prevPage = history[history.length - 2];

    if (currentPage) {
      const currentPageSearch = queryString.parse(currentPage.search);
      const currentPageTitle = getPageTitle(currentPage.pathname);
      const prevPageTitle = getPageTitle(prevPage?.pathname);

      const defaultProps = {
        period: currentPageSearch.period,
        zone: currentPage.pathname.split('/')[2],
      };

      if (currentPageTitle === PAGE_TITLE.ZonePeers && prevPageTitle !== PAGE_TITLE.ZonePeers) {
        trackEvent('viewed zone peers page', {
          'referrer url': prevPageTitle,
          source: '', // 'direct link' | 'zone subtab' | 'sidebar' | 'zone switcher'
          ...defaultProps,
        });
      }

      if (
        (currentPageTitle === PAGE_TITLE.ZonePeers && prevPageTitle === PAGE_TITLE.ZoneOverview) ||
        (currentPageTitle === PAGE_TITLE.ZoneOverview && prevPageTitle === PAGE_TITLE.ZonePeers)
      ) {
        trackEvent('switched zone subtab', {
          zone_subtab: currentPageTitle === PAGE_TITLE.ZonePeers ? 'peers' : 'overview',
          param: ZONES_PEERS_COLUMN_TITLE[currentPageSearch.columnKey as string],
          ...defaultProps,
        });
      }

      if (currentPageTitle === PAGE_TITLE.ZonePeers) {
        trackEvent('sorted zone peers list', {
          param: ZONES_PEERS_COLUMN_TITLE[currentPageSearch.columnKey as string],
          ...defaultProps,
        });
      }
    }
  }, [history]);

  // zones list
  useEffect(() => {
    const currentPage = history[history.length - 1];
    const prevPage = history[history.length - 2];

    if (currentPage) {
      const currentPageSearch = queryString.parse(currentPage.search);
      const currentPageTitle = getPageTitle(currentPage.pathname);
      const prevPageTitle = getPageTitle(prevPage?.pathname);

      if (currentPageTitle === PAGE_TITLE.ZonesList && prevPageTitle !== PAGE_TITLE.ZonesList) {
        trackEvent('viewed zones list page', {
          'referrer url': prevPageTitle,
          period: currentPageSearch.period,
          source: '', // 'menu' | 'sidebar' | 'direct link'
        });
      }

      if (currentPageTitle === PAGE_TITLE.ZoneOverview && prevPageTitle === PAGE_TITLE.ZonesList) {
        trackEvent('selected zone', {
          period: currentPageSearch.period,
          zone: currentPage.pathname.split('/')[2],
        });
      }

      if (currentPageTitle === PAGE_TITLE.ZonesList) {
        trackEvent('sorted zones list', {
          param: ZONES_PAGE_COLUMN_TITLE[currentPageSearch.columnKey as string],
          period: currentPageSearch.period,
        });
      }
    }
  }, [history]);

  // assets
  useEffect(() => {
    const currentPage = history[history.length - 1];
    const prevPage = history[history.length - 2];

    if (currentPage) {
      const currentPageSearch = queryString.parse(currentPage.search);
      const currentPageTitle = getPageTitle(currentPage.pathname);
      const prevPageTitle = getPageTitle(prevPage?.pathname);

      if (currentPageTitle === PAGE_TITLE.Assets) {
        trackEvent('viewed assets page', {
          'referrer url': prevPageTitle,
          source: '', // 'menu' | 'direct link'
        });
      }

      if (currentPageTitle === PAGE_TITLE.Assets) {
        trackEvent('sorted assets list', {
          param: ASSETS_PAGE_COLUMN_TITLE[currentPageSearch.columnKey as string],
        });
      }
    }
  }, [history]);

  return trackEvent;
}
