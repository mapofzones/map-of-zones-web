import { ReactNode } from 'react';

import { ZoneData } from 'hooks/queries/useZonesData';

import { ModalPosition } from '../ZonesSelectorModal/ZonesSelectorModal.props';

export interface ZonesSelectorWrapperProps {
  className?: string;
  children?: ReactNode;
  zonesList: ZoneData[];
  onModalStateChanged?: (opened: boolean) => void;
  onZoneSelected: (zone: string) => void;
  modalPosition?: ModalPosition;
}
