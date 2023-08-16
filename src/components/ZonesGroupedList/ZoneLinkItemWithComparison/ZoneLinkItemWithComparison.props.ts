import { ZoneData } from 'hooks/queries/useZonesData';

export interface ZoneLinkItemWithComparisonProps extends SelectableItemProps {
  zone: ZoneData;
  className?: string;
  isActive: boolean;
  searchValue?: string;
}

interface SelectableItemProps {
  isComparison?: boolean;
  onItemClick?: (zoneKey: string) => void;
  isItemCheckedFunc?: (zoneKey: string) => boolean;
  isItemDisabledFunc?: (zoneKey: string) => boolean;
  onItemCheck?: (zoneKey: string, check: boolean) => void;
}
