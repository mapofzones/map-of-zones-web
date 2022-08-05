import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ChartItemByString } from 'utils/helper';

import { ColumnKeys } from '../Types';

export interface TableRowProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  index: number;
  isTableScrollable?: boolean;
  selectedColumnKey: ColumnKeys;
  zone: ZoneData;
}

export interface ZoneData {
  channelsCount?: number | null;
  ibcActiveAddressesMainnetRatingDiff?: number | null;
  ibcDauMainnet?: number | null;
  ibcTransfersChart?: ChartItemByString[];
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
  isZoneUpToDate?: boolean | null;
  logoUrl?: string | null;
  name: string;
  peersCountMainnet?: number | null;
  totalIbcTxsMainnetRatingDiff?: number | null;
  totalTxs?: number | null;
  zone: string;
}
