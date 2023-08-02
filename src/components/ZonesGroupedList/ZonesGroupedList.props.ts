import { ZoneData } from 'hooks/queries/useZonesData';

export interface ZonesGroupedListProps {
  searchValue: string;
  zones: ZoneData[];
  onItemClick: (zone: string) => void;
}
