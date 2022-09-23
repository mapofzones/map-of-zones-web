import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ZonesListZoneDetails } from '../../../useZonesListZoneDetails';
import { ZoneChannelRowData, ZoneData } from '../TableRow.props';

export interface ChannelData extends ZoneChannelRowData {
  channelId?: string | null;
  clientId?: string | null;
  connectionId?: string | null;
  isOpened?: boolean | null;
  zoneCounterpartyChannelId?: string | null;
  zoneCounterpartyKey?: string | null;
}

export interface ChannelRowProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  channel: ChannelData;
  index: number;
  isTableHorizontalScrollable?: boolean;
  parentZone: ZonesListZoneDetails;
  zone: ZoneData;
}
