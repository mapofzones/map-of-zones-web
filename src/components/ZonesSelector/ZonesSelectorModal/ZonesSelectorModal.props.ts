import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ZoneData } from 'hooks/queries/useZonesData';
import { ModalProps } from 'ui/Modal/Modal.props';

export interface ZonesSearchProps
  extends ModalProps,
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  zonesList: ZoneData[];
  onZoneSelected: (zone: string) => void;
  offset?: DOMRect | undefined;
}
