import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ChartItemByString } from 'utils/helper';

import { ColumnKeys } from '../../../Types';

export interface TotalInfoCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  totalInfo?: TotalInfoType;
  loading?: boolean;
  columnType: ColumnKeys;
}

export type TotalInfoType = {
  readonly ibcVolume?: number | null;
  readonly ibcVolumePending: number;
  readonly ibcTransfers: number;
  readonly ibcTransfersPending: number;
  readonly dau: number;
  readonly ibcVolumeChart?: ChartItemByString[];
};
