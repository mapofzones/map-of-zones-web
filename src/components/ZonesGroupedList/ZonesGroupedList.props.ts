import { ZoneData } from 'hooks/queries/useZonesData';

export interface ZonesGroupedListProps {
  className?: string;
  searchValue: string;
  zones: ZoneData[];
  onItemClick: (zone: string) => void;
}
