import { ZoneData } from 'hooks/queries/useZonesData';

export interface GlobalSearchModalProps {
  isVisible: boolean;
  zones: ZoneData[];
  onModalClose: () => void;
}
