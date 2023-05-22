import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ZoneBase } from 'types/models/ZoneDetails';

import { ColumnKeys } from '../../../Types';

export interface ZonesInfoTableProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  data?: ZonesTableDataQueryItem[];
  columnType: ColumnKeys;
}

export interface ZonesTableDataQueryItem extends ZoneBase {
  logoUrl?: string | null;
  ibcVolume?: number | null;
  ibcVolumePending?: number | null;
  ibcVolumeRating?: number | null;
  ibcVolumeRatingDiff?: number | null;
  ibcTransfers?: number | null;
  ibcTransfersPending?: number | null;
  ibcTransfersRating?: number | null;
  ibcTransfersRatingDiff?: number | null;
  totalTxs?: number | null;
  totalTxsRating?: number | null;
  totalTxsRatingDiff?: number | null;
  dau?: number | null;
  dauRating?: number | null;
  dauRatingDiff?: number | null;
}
