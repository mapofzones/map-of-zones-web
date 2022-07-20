import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ZoneDetails } from '../../useZoneDetails';
import { ChannelData } from './ChannelRow/ChannelRow.props';

export interface TableRowProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  parentZone: ZoneDetails;
  zone: ZoneData;
}
export interface ZoneData {
  channels: Array<ChannelData>;
  zoneCounterpartyKey?: string | null;
  zoneCounterpartyLogoUrl?: string | null;
  zoneCounterpartyName?: string | null;
  ibcVolumeIn?: number | null;
  ibcVolumeInPending?: number | null;
  ibcVolumeOut?: number | null;
  ibcVolumeOutPending?: number | null;
  ibcTransfers?: number | null;
  ibcTransfersPending?: number | null;
  ibcTransfersFailed?: number | null;
  isZoneCounterpartyUpToDate?: boolean | null;
  successRate?: number | null;
}
