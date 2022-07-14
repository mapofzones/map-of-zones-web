import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ColumnKeys } from '../TableHeader/Types';

export interface TableRowProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  index: number;
  selectedColumnKey: ColumnKeys;
  zone: ZoneData;
}

export interface ZoneData {
  channelsCount?: number | null;
  ibcActiveAddressesMainnetRatingDiff?: number | null;
  ibcDauMainnet?: number | null;
  ibcTransfersMainnet?: number | null;
  ibcTransfersMainnetRatingDiff?: number | null;
  ibcTransfersPendingMainnet?: number | null;
  ibcVolumeInMainnet?: number | null;
  ibcVolumeInMainnetRatingDiff?: number | null;
  ibcVolumeInPendingMainnet?: number | null;
  ibcVolumeMainnet?: number | null;
  ibcVolumeMainnetRatingDiff?: number | null;
  ibcVolumeOutMainnet?: number | null;
  ibcVolumeOutMainnetRatingDiff?: number | null;
  ibcVolumeOutPendingMainnet?: number | null;
  ibcVolumePendingMainnet?: number | null;
  logoUrl?: string | null;
  name: string;
  peersCountMainnet?: number | null;
  totalIbcTxsMainnetRatingDiff?: number | null;
  totalTxs?: number | null;
  zone: string;
}
