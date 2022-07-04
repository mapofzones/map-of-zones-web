import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { NumberType } from 'components';

import { ColumnKeys } from '../../../Types';

export interface ZonesInfoTableProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  data?: ZonesTableDataQueryItem[];
  columnType: ColumnKeys;
  numberType: NumberType;
}

export interface ZonesTableDataQueryItem {
  zone: string;
  logoUrl?: string | null;
  name: string;
  ibcVolume?: any | null;
  ibcVolumePending: any;
  ibcVolumeRating?: number | null;
  ibcVolumeRatingDiff?: number | null;
  ibcTransfers: number;
  ibcTransfersPending: number;
  ibcTransfersRating?: number | null;
  ibcTransfersRatingDiff?: number | null;
  totalTxs?: number | null;
  totalTxsRating: number;
  totalTxsRatingDiff: number;
}
