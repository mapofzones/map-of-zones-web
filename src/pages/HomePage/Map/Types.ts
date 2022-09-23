import { LinkObject, NodeObject } from 'react-force-graph-2d';

export interface Comet {
  __progress: number;
}

export type HoveredZoneKeyType = string | undefined;

export interface Link extends LinkObject {
  __comet?: Comet;
  source: MapNode;
  target: MapNode;
  ibcVolume?: number | null;
  isActive: boolean;
}

export interface MapNode extends NodeObject {
  zone: string;
  isMainnet: boolean;
  logoUrl?: string | null;
  name: string;
  ibcVolume?: number | null;
  ibcVolumeIn?: number | null;
  ibcVolumeOut?: number | null;
  level: number;
  radius: number;
  logoRadius?: number;
  color: string;
  fontSize: number;
}

export type SelectedZoneKeyType = string | undefined;

export interface ZoneLink {
  __typename?: 'zones_graphs';
  source: string;
  target: string;
  ibcVolume?: number | null;
}

export interface ZoneStat {
  __typename?: 'zones_stats';
  zone: string;
  ibcVolume: number | null;
  ibcVolumeIn: number | null;
  ibcVolumeOut: number | null;
  isMainnet: boolean;
  logoUrl?: string | null;
  name: string;
}
