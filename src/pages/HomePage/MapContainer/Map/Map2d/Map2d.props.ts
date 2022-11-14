import { NodeObject } from 'react-force-graph-2d';

import { GraphDataApi, HoveredZoneKeyType, ImagesMap, SelectedZoneKeyType } from '../Types';

export interface Map2dProps {
  data: GraphDataApi;
  hoveredZoneKey: HoveredZoneKeyType;
  selectedZoneKey: SelectedZoneKeyType;
  onZoneClick: (node: NodeObject) => void;
  onZoneHover: (node: NodeObject | null) => void;
  windowSize: { height: number; width: number };
  forceZoom: number;
  images: ImagesMap;
}
