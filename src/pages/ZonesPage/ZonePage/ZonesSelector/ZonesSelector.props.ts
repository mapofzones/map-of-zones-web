import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ZonesListZoneDetails } from '../useZonesListZoneDetails';
import { ZoneData } from './ZoneInfo/ZoneInfo.props';

export interface ZonesSearchProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  currentZone?: ZonesListZoneDetails;
  zonesList: ZoneData[];
}
