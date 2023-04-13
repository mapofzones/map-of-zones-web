import { ZoneData } from 'hooks/queries/useZonesData';

export interface ZoneLinkItemsWithSearchProps {
  title: string;
  zones: ZoneData[];
  selectedIndex?: number;
  searchValue?: string;
  onItemClick?: () => void;
  activeItemRef: any;
}
