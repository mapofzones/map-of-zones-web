import { ZoneData } from 'hooks/queries/useZonesData';

export interface ZoneLinkItemsWithSearchProps {
  title: string;
  zones: ZoneData[];
  searchValue?: string;
}
