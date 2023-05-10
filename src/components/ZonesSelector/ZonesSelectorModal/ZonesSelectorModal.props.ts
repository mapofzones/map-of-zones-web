import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ZoneData } from 'hooks/queries/useZonesData';

export interface ZonesSearchProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  currentZone?: string;
  zonesList: ZoneData[];
  onZoneSelected: (zone: string) => void;
}
