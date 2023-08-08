import { ZoneData } from 'hooks/queries/useZonesData';

export interface ZonesSelectorProps {
  className?: string;
  classNameButton?: string;
  loading: boolean;
  logoSize?: string;
  zone?: string;
  zonesList: ZoneData[];
  onZonesSelected: (zone: string) => void;
}
