import lazyPreload from './lazyPreload';

export const LazyMap2d = lazyPreload(
  () => import(/* webpackPrefetch: true */ '../pages/HomePage/MapContainer/Map/Map2d/Map2d')
);

export const LazyMap3d = lazyPreload(
  () => import(/* webpackPrefetch: true */ '../pages/HomePage/MapContainer/Map/Map3d/Map3d')
);

export const LazySwapWidget = lazyPreload(
  () => import(/* webpackPrefetch: true */ '../pages/SwapPage/SwapWidget/SwapWidget')
);
