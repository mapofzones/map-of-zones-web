import { ReactNode } from 'react';

import { ZoneData } from 'hooks/queries/useZonesData';

export interface ZonesSelectorWrapperProps {
  className?: string;
  children?: ReactNode;
  zonesList: ZoneData[];
  onModalStateChanged?: (opened: boolean) => void;
  onZoneSelected: (zone: string) => void;
}
