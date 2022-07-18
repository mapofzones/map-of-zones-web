import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { NumberType } from 'components';

import { ColumnKeys } from '../../../Types';

export type TotalInfoType = {
  readonly ibcVolume?: number | null;
  readonly ibcVolumePending: number;
  readonly ibcTransfers: number;
  readonly ibcTransfersPending: number;
};

export interface TotalInfoCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  totalInfo?: TotalInfoType;
  loading?: boolean;
  columnType: ColumnKeys;
}
