import { useCallback } from 'react';

import { matchPath, useLocation, useSearchParams } from 'react-router-dom';

import { useSelectedZone } from 'pages/HomePage/MapContainer/Map/hooks/eventHooks';
import * as path from 'routing';

import { trackEvent } from '../useAnalytics';

export type ShareLinkDestination = 'twitter' | 'telegram';

const pageSourcesByPath = [
  {
    path: path.homePath,
    source: 'home page',
  },
  {
    path: path.getHomeZoneOverviewPath(),
    source: `zone overview sidebar`,
  },
  {
    path: path.getHomeZonePeersPath(),
    source: `zone peers sidebar`,
  },
  {
    path: path.getZonesOverviewPath(),
    source: `zone overview page`,
  },
  {
    path: path.getZonesPeersPath(),
    source: `zone peers page`,
  },
  {
    path: path.assetsPath,
    source: `assets page`,
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
