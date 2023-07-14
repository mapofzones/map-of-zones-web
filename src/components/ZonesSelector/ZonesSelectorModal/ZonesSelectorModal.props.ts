import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ZoneData } from 'hooks/queries/useZonesData';

export type ModalPosition = 'left' | 'right';

export interface ZonesSearchProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  currentZone?: string;
  zonesList: ZoneData[];
  onZoneSelected: (zone: string) => void;
  modalPosition?: ModalPosition;
  offset?: any;
}
