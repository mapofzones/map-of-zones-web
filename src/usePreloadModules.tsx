import { useEffect } from 'react';

import { matchPath } from 'react-router-dom';

import { ReactLazyPreload } from 'ReactLazyPreload';
import * as path from 'routing';

export const LazyMap2d = ReactLazyPreload(
  () => import(/* webpackPrefetch: true */ './pages/HomePage/MapContainer/Map/Map2d/Map2d')
);

export const LazyMap3d = ReactLazyPreload(
  () => import(/* webpackPrefetch: true */ './pages/HomePage/MapContainer/Map/Map3d/Map3d')
);

export const LazySwapPage = ReactLazyPreload(
  () => import(/* webpackPrefetch: true */ './pages/SwapPage/SwapPage')
);

export function usePreloadModules(pathname: string) {
  useEffect(() => {
    async function prelaod() {
      if (matchPath(path.swapPath, pathname)) {
        // if it swap page, so we need preload Swap module before
        // else load Map2d firstly
        await LazySwapPage.preload();
        await LazyMap2d.preload();
        await LazyMap3d.preload();
      } else {
        await LazyMap2d.preload();
        await LazyMap3d.preload();
        await LazySwapPage.preload();
      }
    }

    prelaod();
  });
}
