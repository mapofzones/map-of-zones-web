import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { NumberType } from 'components';
import { ChartItemByString } from 'utils/helper';

export interface TotalInfoCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  value: number;
  pendingValue?: number;
  chartData?: ChartItemByString[];
  chartKey?: string;
  numberType: NumberType;
  className?: string;
  loading?: boolean;
  hasBorder?: boolean;
}

export type TotalInfoType = {
  readonly ibcVolume?: number | null;
  readonly ibcVolumePending: number;
  readonly ibcTransfers: number;
  readonly ibcTransfersPending: number;
  readonly ibcVolumeChart?: ChartItemByString[];
};
