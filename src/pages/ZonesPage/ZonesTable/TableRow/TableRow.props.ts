import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TableRowProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  index: number;
  zone: ZoneData;
}

export interface ZoneData {
  channelsCount?: number | null;
  ibcDauMainnet?: number | null;
  ibcTransfersMainnet?: number | null;
  ibcTransfersPendingMainnet?: number | null;
  ibcVolumeInMainnet?: number | null;
  ibcVolumeInPendingMainnet?: number | null;
  ibcVolumeMainnet?: number | null;
  ibcVolumeOutMainnet?: number | null;
  ibcVolumeOutPendingMainnet?: number | null;
  ibcVolumePendingMainnet?: number | null;
  logoUrl?: string | null;
  name: string;
  peersCountMainnet?: number | null;
  totalTxs?: number | null;
  zone: string;
}
