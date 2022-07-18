import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { NumberType } from 'components';

import { ColumnKeys } from '../../../Types';

export interface ZonesInfoTableProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  data?: ZonesTableDataQueryItem[];
  searchValue?: string;
  columnType: ColumnKeys;
}

export interface ZonesTableDataQueryItem {
  zone: string;
  logoUrl?: string | null;
  name: string;
  ibcVolume?: number | null;
  ibcVolumePending?: number | null;
  ibcVolumeRating?: number | null;
  ibcVolumeRatingDiff?: number | null;
  chartVolume?: any | null;
  ibcTransfers?: number | null;
  ibcTransfersPending?: number | null;
  ibcTransfersRating?: number | null;
  ibcTransfersRatingDiff?: number | null;
  totalTxs?: number | null;
  totalTxsRating?: number | null;
  totalTxsRatingDiff?: number | null;
}
