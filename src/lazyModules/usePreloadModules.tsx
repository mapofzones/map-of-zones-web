import { useEffect } from 'react';

import { matchPath, useLocation } from 'react-router-dom';

import * as path from 'routing';

import { LazyMap2d, LazyMap3d, LazySwapWidget } from './exports';

export default function usePreloadModules() {
  const { pathname } = useLocation();

  useEffect(() => {
    async function prelaod() {
      if (matchPath(path.swapPath, pathname)) {
        // if it swap page, so we need preload Swap module before
        // else load Map2d firstly
        await LazySwapWidget.preload();
        await LazyMap2d.preload();
        await LazyMap3d.preload();
      } else {
        await LazyMap2d.preload();
        await LazyMap3d.preload();
        await LazySwapWidget.preload();
      }
    }

    prelaod();
  });
}
