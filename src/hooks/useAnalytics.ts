import { useEffect, useState } from 'react';

import { init } from '@amplitude/analytics-browser';
// import { init, track } from '@amplitude/analytics-browser';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

import { ColumnKeys as AssetsPageColumnKeys } from 'pages/AssetsPage/AssetsTable/Types';
import { ColumnKeys as ZonesPageZonePeersColumnKeys } from 'pages/ZonesPage/ZonePage/ZonePeers/Types';
import { ColumnKeys as ZonesPageColumnKeys } from 'pages/ZonesPage/ZonesInfo/ZonesTable/Types';

import useDebounce from './useDebounce';

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

interface Page {
  key: string;
  pathname: string;
  search: {
    columnKey?: string;
    period?: string;
  };
  title: string;
}

export function useAnalytics() {
  const location = useLocation();

  const [history, setHistory] = useState<Page[]>([]);

  const debouncedLocation = useDebounce(location, 500);

  const currentPage = history[history.length - 1];
  const prevPage = history[history.length - 2];

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

  // page scroll
  useEffect(() => {
    if (!currentPage) return;

    const eventName = EVENT_FOR_SCROLL_BY_PAGE_TITLE[currentPage.title];

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
  }, [currentPage]);

  // changed period
  useEffect(() => {
    if (!currentPage) return;

    if (
      currentPage.title === prevPage?.title &&
      currentPage.search.period !== prevPage?.search.period
    ) {
      trackEvent('changed period', {
        period: currentPage.search.period,
        source: currentPage.title,
      });
    }
  }, [currentPage, prevPage]);

  // TODO: shared page
  // TODO: chosen link
  // TODO: changed zone

  // Overall
  useEffect(() => {
    if (!currentPage?.title) return;

    if (currentPage.title !== prevPage?.title) {
      trackEvent('viewed application page', {
        page_title: currentPage.title,
        referrer_url: prevPage?.title,
        visit_number: history.filter(({ pathname }) => pathname === currentPage.pathname).length,
        default_period: currentPage.search.period,
      });
    }
  }, [currentPage, prevPage, history]);

  // zone peers
  useEffect(() => {
    if (!currentPage?.title) return;

    const defaultProps = {
      period: currentPage.search.period,
      zone: currentPage.pathname.split('/')[2],
    };

    if (
      (currentPage.title === PAGE_TITLE.ZonePeers && prevPage?.title === PAGE_TITLE.ZoneOverview) ||
      (currentPage.title === PAGE_TITLE.ZoneOverview && prevPage?.title === PAGE_TITLE.ZonePeers)
    ) {
      trackEvent('switched zone subtab', {
        zone_subtab: currentPage.title === PAGE_TITLE.ZonePeers ? 'peers' : 'overview',
        param: ZONES_PEERS_COLUMN_TITLE[currentPage.search.columnKey as string],
        ...defaultProps,
      });
    }

    if (currentPage.title !== PAGE_TITLE.ZonePeers) return;

    if (
      prevPage?.title === PAGE_TITLE.ZonePeers &&
      currentPage.search.columnKey &&
      prevPage?.search.columnKey &&
      currentPage.search.columnKey !== prevPage?.search.columnKey
    ) {
      trackEvent('sorted zone peers list', {
        param: ZONES_PEERS_COLUMN_TITLE[currentPage.search.columnKey as string],
        ...defaultProps,
      });
    }

    let source = '';

    if (!prevPage) {
      source = 'direct link';
    } else if (
      prevPage.title === currentPage.title &&
      defaultProps.zone !== prevPage.pathname.split('/')[2]
    ) {
      source = 'zone switcher';
    } else if (prevPage.title === PAGE_TITLE.ZoneOverview) {
      source = 'zone subtab';
    } else if (prevPage.title === PAGE_TITLE.HomePeers) {
      source = 'sidebar';
    }

    if (source) {
      trackEvent('viewed zone peers page', {
        referrer_url: prevPage?.title,
        source,
        ...defaultProps,
      });
    }
  }, [currentPage, prevPage]);

  // zones list
  useEffect(() => {
    if (!currentPage?.title) return;

    if (currentPage.title === PAGE_TITLE.ZoneOverview && prevPage?.title === PAGE_TITLE.ZonesList) {
      trackEvent('selected zone', {
        period: currentPage.search.period,
        zone: currentPage.pathname.split('/')[2],
      });
    }

    if (currentPage.title !== PAGE_TITLE.ZonesList) return;

    if (
      prevPage?.title === PAGE_TITLE.ZonesList &&
      currentPage.search.columnKey &&
      prevPage?.search.columnKey &&
      currentPage.search.columnKey !== prevPage?.search.columnKey
    ) {
      trackEvent('sorted zones list', {
        param: ZONES_PAGE_COLUMN_TITLE[currentPage.search.columnKey as string],
        period: currentPage.search.period,
      });
    }

    let source = '';

    if (!prevPage) {
      source = 'direct link';
    } else if (prevPage.title !== currentPage.title) {
      source = 'menu';
    }

    if (source) {
      trackEvent('viewed zones list page', {
        referrer_url: prevPage?.title,
        period: currentPage.search.period,
        source: source, // TODO: 'sidebar'
      });
    }
  }, [currentPage, prevPage]);

  // assets
  useEffect(() => {
    if (currentPage?.title !== PAGE_TITLE.Assets) return;

    if (prevPage?.title !== PAGE_TITLE.Assets) {
      trackEvent('viewed assets page', {
        referrer_url: prevPage?.title,
        source: prevPage ? 'menu' : 'direct link',
      });
    }

    if (
      prevPage?.title === PAGE_TITLE.Assets &&
      currentPage.search.columnKey &&
      prevPage?.search.columnKey &&
      currentPage.search.columnKey !== prevPage?.search.columnKey
    ) {
      trackEvent('sorted assets list', {
        param: ASSETS_PAGE_COLUMN_TITLE[currentPage.search.columnKey as string],
      });
    }
  }, [currentPage, prevPage]);

  return trackEvent;
}
