import { LinkObject, NodeObject } from 'react-force-graph-2d';

export type HoveredZoneKeyType = string | undefined;

export interface Link extends LinkObject {
  source: MapNode;
  target: MapNode;
  ibcVolume?: number | null;
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
}

export type SelectedZoneKeyType = string | undefined;

export interface ZoneLink {
  __typename?: 'zones_graphs';
  source: string;
  target: string;
  ibcVolume?: any | null;
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
