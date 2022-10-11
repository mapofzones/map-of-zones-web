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

  ibcVolumeChart: ChartItemByString[];
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

  dauRating?: number | null;
  dauRatingDiff?: number | null;

  ibcDauRating: number;
  ibcDauRatingDiff: number;

  totalTxs: number;
  dau?: number | null;
  ibcDau?: number | null;
}
