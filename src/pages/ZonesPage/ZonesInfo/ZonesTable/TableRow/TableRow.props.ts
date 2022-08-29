import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ChartItemByString } from 'utils/helper';

import { ColumnKeys } from '../Types';

export interface TableRowProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  index: number;
  isTableHorizontalScrollable?: boolean;
  selectedColumnKey: ColumnKeys;
  zone: ZoneData;
}

export interface ZoneData {
  zone: string;
  name: string;
  logoUrl?: string | null;
  isZoneUpToDate?: boolean | null;

  channelsCount: number;
  peersCount: number;

  ibcTransfers: number;
  ibcTransfersPending: number;
  ibcTransfersRating: number;
  ibcTransfersRatingDiff: number;
  ibcTransfersChart: ChartItemByString[];

  ibcVolume: number;
  ibcVolumePending: number;
  ibcVolumeRating: number;
  ibcVolumeRatingDiff: number;

  ibcVolumeIn: number;
  ibcVolumeInPending: number;
  ibcVolumeInRating: number;
  ibcVolumeInRatingDiff: number;

  ibcVolumeOut: number;
  ibcVolumeOutPending: number;
  ibcVolumeOutRating: number;
  ibcVolumeOutRatingDiff: number;

  totalIbcTxsRating: number;
  totalIbcTxsRatingDiff: number;

  ibcDauRating: number;

  totalTxs: number;
  ibcDau: number;
}
