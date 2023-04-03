import lazyPreload from './lazyPreload';

export const LazyMap2d = lazyPreload(
  () => import('../pages/HomePage/MapContainer/Map/Map2d/Map2d')
);

export const LazyMap3d = lazyPreload(
  () => import('../pages/HomePage/MapContainer/Map/Map3d/Map3d')
);

export const LazySwapWidget = lazyPreload(() => import('../pages/SwapPage/SwapWidget/SwapWidget'));
