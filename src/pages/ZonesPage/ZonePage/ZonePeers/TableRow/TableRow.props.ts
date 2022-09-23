import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ZonesListZoneDetails } from '../../useZonesListZoneDetails';
import { ChannelData } from './ChannelRow/ChannelRow.props';

export interface TableRowProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  isTableHorizontalScrollable?: boolean;
  parentZone: ZonesListZoneDetails;
  zone: ZoneData;
}
export interface ZoneChannelRowData {
  ibcVolume?: number | null;
  ibcVolumePending?: number | null;
  ibcVolumeIn?: number | null;
  ibcVolumeInPending?: number | null;
  ibcVolumeOut?: number | null;
  ibcVolumeOutPending?: number | null;
  ibcTransfers?: number | null;
  ibcTransfersPending?: number | null;
  ibcTransfersFailed?: number | null;
  ibcTransfersSuccessRate?: number | null;
}

export interface ZoneData extends ZoneChannelRowData {
  channels: Array<ChannelData>;
  zone?: string | null;
  zoneCounterpartyKey?: string | null;
  zoneCounterpartyLogoUrl?: string | null;
  zoneCounterpartyName?: string | null;
  isZoneCounterpartyUpToDate?: boolean | null;
}
