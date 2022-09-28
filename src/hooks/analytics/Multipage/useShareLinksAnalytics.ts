import { useCallback } from 'react';

import { matchPath, useLocation, useSearchParams } from 'react-router-dom';

import { useSelectedZone } from 'pages/HomePage/Map/hooks/eventHooks';

import { trackEvent } from '../useAnalytics';

export type ShareLinkDestination = 'twitter' | 'telegram';

const pageSourcesByPath = [
  {
    path: 'home',
    source: 'home page',
  },
  {
    path: 'home/:zone/overview',
    source: 'zone overview sidebar',
  },
  {
    path: 'home/:zone/peers',
    source: 'zone peers sidebar',
  },
  {
    path: 'zones/:zone/overview',
    source: 'zone overview page',
  },
  {
    path: 'zones/:zone/peers',
    source: 'zone peers page',
  },
  {
    path: 'assets',
    source: 'assets page',
  },
];

export function useShareLinksAnalytics() {
  const [zone = 'all zones'] = useSelectedZone();
  const [searchParams] = useSearchParams();
  const period = searchParams.get('period');

  const location = useLocation();

  const trackShareLinksAnalytics = useCallback(
    (destination: ShareLinkDestination) => {
      const source = getSource(location.pathname);
      if (source) {
        trackEvent('shared page', {
          zone,
          source,
          period,
          destination,
        });
      }
    },
    [location.pathname, period, zone]
  );

  return trackShareLinksAnalytics;
}

function getSource(pathName: string) {
  for (let index = 0; index < pageSourcesByPath.length; index++) {
    const pageSourceItem = pageSourcesByPath[index];
    const match = matchPath(pageSourceItem.path, pathName);
    if (match) {
      return pageSourceItem.source;
    }
  }
  return undefined;
}
