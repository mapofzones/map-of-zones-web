import { useCallback } from 'react';

import { matchPath, useLocation } from 'react-router-dom';

import { useSelectedZone } from 'pages/HomePage/Map/hooks/eventHooks';

import { trackEvent } from '../useAnalytics';

export type ZoneExternalLink = 'website' | 'git' | 'twitter' | 'telegram';

const pageSourcesByPath = [
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
];

export function useZoneLinksAnalytics() {
  const [zone = ''] = useSelectedZone();

  const location = useLocation();

  const trackZoneLinksAnalytics = useCallback(
    (destination: ZoneExternalLink) => {
      const source = getSource(location.pathname);
      if (source) {
        trackEvent('chosen link', {
          zone,
          source,
          destination,
        });
      }
    },
    [location.pathname, zone]
  );

  return trackZoneLinksAnalytics;
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
