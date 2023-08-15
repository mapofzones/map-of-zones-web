import { CSSProperties } from 'react';

import { ZoneData } from 'hooks/queries/useZonesData';

export interface ZonesGroupedListProps {
  className?: string;
  style?: CSSProperties;
  searchValue: string;
  zones: ZoneData[];
}
