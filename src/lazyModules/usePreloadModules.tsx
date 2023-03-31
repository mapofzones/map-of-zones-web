import { useEffect } from 'react';

import { matchPath, useLocation, useSearchParams } from 'react-router-dom';

import { useShowMap } from 'hooks/useShowMap';
import * as path from 'routing';

import { LazyMap2d, LazyMap3d, LazySwapWidget } from './exports';

export default function usePreloadModules() {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const showMap = useShowMap();

  useEffect(() => {
    async function prelaod() {
      const modulesOrder = getModulesOrder(pathname, searchParams.get('mapType') === '3d', showMap);
      modulesOrder.forEach(async (component: any) => {
        if (!component?.preload) {
          return;
        }
        await component.preload();
      });
    }

    prelaod();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showMap]);
}

function getModulesOrder(pathname: string, has3dSearchParam: boolean, showMap: boolean) {
  const modulesOrder = [LazySwapWidget]; // always need to preload this module
  if (!showMap) return modulesOrder;

  const mapOrder = has3dSearchParam ? [LazyMap3d, LazyMap2d] : [LazyMap2d, LazyMap3d];
  if (matchPath(path.swapPath, pathname)) {
    return [...modulesOrder, ...mapOrder];
  }

  return [...mapOrder, ...modulesOrder];
}
