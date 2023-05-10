import { ZoneData } from 'hooks/queries/useZonesData';

export interface ZonesSelectorProps {
  className?: string;
  loading: boolean;
  zone?: string;
  zonesList: ZoneData[];
  onZonesSelected: (zone: string) => void;
}
