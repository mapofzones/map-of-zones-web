import { RefObject } from 'react';

import { MapType } from '../MapContainer';

export interface MapProps {
  mapType: MapType;
  increaseZoom: RefObject<() => void>;
  decreaseZoom: RefObject<() => void>;
  disableZoomIn: (value: boolean) => void;
  disableZoomOut: (value: boolean) => void;
}
