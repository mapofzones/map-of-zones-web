import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ZoneData } from 'hooks/queries/useZonesData';
import { ModalProps } from 'ui/Modal/Modal.props';

export type ModalPosition = 'left' | 'right';

export interface ZonesSearchProps
  extends ModalProps,
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  zonesList: ZoneData[];
  onZoneSelected: (zone: string) => void;
  modalPosition?: ModalPosition;
  offset?: DOMRect | undefined;
}
