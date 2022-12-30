import { RefObject } from 'react';

import { NodeObject } from 'react-force-graph-3d';

import { GraphDataApi, HoveredZoneKeyType, ImagesMap, SelectedZoneKeyType } from '../Types';

export interface Map3dProps {
  data: GraphDataApi;
  hoveredZoneKey: HoveredZoneKeyType;
  selectedZoneKey: SelectedZoneKeyType;
  onZoneClick: (node: NodeObject) => void;
  onZoneHover: (node: NodeObject | null) => void;
  height: number;
  width: number;
  images: ImagesMap;
  increaseZoom: RefObject<() => void>;
  decreaseZoom: RefObject<() => void>;
}
