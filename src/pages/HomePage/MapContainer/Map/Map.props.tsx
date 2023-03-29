import { RefObject } from 'react';

import { GraphDataApi } from './Types';
import { MapType } from '../MapContainer.types';

export interface MapProps {
  mapType: MapType;
  increaseZoom: RefObject<() => void>;
  decreaseZoom: RefObject<() => void>;
  data: GraphDataApi;
  disableZoomIn: (value: boolean) => void;
  disableZoomOut: (value: boolean) => void;
}
