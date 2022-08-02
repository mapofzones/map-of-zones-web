import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ZonesListZoneDetails } from '../../../../useZonesListZoneDetails';
import { ZoneData } from '../../TableRow.props';
import { ChannelData } from '../ChannelRow.props';

export interface ChannelInfoTooltipProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  channel: ChannelData;
  parentZone: ZonesListZoneDetails;
  zone: ZoneData;
}
