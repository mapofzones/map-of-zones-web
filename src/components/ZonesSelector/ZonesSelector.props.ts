import { ZoneData } from 'hooks/queries/useZonesData';

export interface ZonesSelectorProps {
  className?: string;
  classNameButton?: string;
  loading: boolean;
  zone?: string;
  zonesList: ZoneData[];
  onZonesSelected: (zone: string) => void;
}
