import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ZoneData } from '../useZonesData';
import { ZonesListZoneDetails } from '../useZonesListZoneDetails';

export interface ZonesSearchProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  currentZone?: ZonesListZoneDetails;
  zonesList: ZoneData[];
}
