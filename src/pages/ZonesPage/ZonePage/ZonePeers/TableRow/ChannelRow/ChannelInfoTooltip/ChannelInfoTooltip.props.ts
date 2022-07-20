import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ZoneDetails } from '../../../../useZoneDetails';
import { ZoneData } from '../../TableRow.props';
import { ChannelData } from '../ChannelRow.props';

export interface ChannelInfoTooltipProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  channel: ChannelData;
  parentZone: ZoneDetails;
  zone: ZoneData;
}
