import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ZoneData } from '../../../../hooks/queries/useZonesData';
import { ZonesListZoneDetails } from '../useZonesListZoneDetails';

export interface ZonesSearchProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  currentZone?: ZonesListZoneDetails;
  zonesList: ZoneData[];
}
