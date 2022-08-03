import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ZonesListZoneDetails } from '../../useZonesListZoneDetails';

export interface ZoneData {
  logoUrl?: string | null;
  name: string;
  zone: string;
}

export interface ZoneInfoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  currentZone?: ZonesListZoneDetails;
  searchValue: string;
  zone: ZoneData;
}
