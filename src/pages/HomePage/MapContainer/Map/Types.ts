import { LinkObject, NodeObject } from 'react-force-graph-2d';

import { ZoneBase } from 'types/models/ZoneDetails';

export type CanvasesMap = { [imgUrl: string]: HTMLCanvasElement };

export interface Comet {
  __progress: number;
}

export type HoveredZoneKeyType = string | undefined;

export type ImagesMap = { [imgUrl: string]: HTMLImageElement };

export interface MapData {
  links: MapLink[];
  nodes: MapNode[];
}

export interface MapLink extends LinkObject {
  __comet?: Comet;
  source: MapLinkNode | string;
  target: MapLinkNode | string;
  ibcVolume?: number | null;
  isActive: boolean;
}

export interface MapLinkNode extends NodeObject {
  zone: string;
}

export interface MapNode extends NodeObject, ZoneBase {
  __animatedPos?: Position[];
  isMainnet: boolean;
  logoUrl?: string | null;
  ibcVolume?: number | null;
  ibcVolumeIn?: number | null;
  ibcVolumeOut?: number | null;
  level: number;
  radius: number;
  logoRadius?: number;
  color: string;
  fontSize: number;
}

export interface Position {
  x: number;
  y: number;
}

export type SelectedZoneKeyType = string | undefined;

// eslint-disable-next-line sort-exports/sort-exports
export interface GraphDataApi {
  links: ZoneLinkApi[];
  nodes: ZoneStatApi[];
}

export interface ZoneLinkApi {
  source: string;
  target: string;
  ibcVolume?: number | null;
}

export interface ZoneStatApi extends ZoneBase {
  ibcVolume: number | null;
  ibcVolumeIn: number | null;
  ibcVolumeOut: number | null;
  ibcVolumeRating: number;
  ibcTransfersRating: number;
  dauRating?: number | null;
  totalTxsRating: number;
  isMainnet: boolean;
  logoUrl?: string | null;
}
