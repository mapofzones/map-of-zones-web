import { NodeObject } from 'react-force-graph-2d';

import { HoveredZoneKeyType, ImagesMap, MapData, SelectedZoneKeyType } from '../Types';

export interface Map2dProps {
  mapData: MapData;
  hoveredZoneKey: HoveredZoneKeyType;
  selectedZoneKey: SelectedZoneKeyType;
  onZoneClick: (node: NodeObject) => void;
  onZoneHover: (node: NodeObject | null) => void;
  windowSize: { height: number; width: number };
  images: ImagesMap;
}
