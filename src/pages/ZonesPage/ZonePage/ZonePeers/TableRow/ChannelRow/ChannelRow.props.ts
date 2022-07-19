import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ChannelRowProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  channel: ChannelData;
  index: number;
}

export interface ChannelData {
  channelId?: string | null;
  clientId?: string | null;
  connectionId?: string | null;
  ibcTransfers?: number | null;
  ibcTransfersFailed?: number | null;
  ibcTransfersPending?: number | null;
  ibcVolumeIn?: number | null;
  ibcVolumeInPending?: number | null;
  ibcVolumeOut?: number | null;
  ibcVolumeOutPending?: number | null;
  isOpened?: boolean | null;
  successRate?: number | null;
  zoneCounterpartyChannelId?: string | null;
  zoneCounterpartyKey?: string | null;
}
