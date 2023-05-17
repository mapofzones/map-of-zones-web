import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ElementSize } from 'types/ElementSize';
import { NumberType } from 'types/NumberType';
import { ChartItemByString } from 'types/chart';

export interface TotalInfoCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  value?: number;
  pendingValue?: number;
  chartData?: ChartItemByString[];
  chartKey?: string;
  numberType: NumberType;
  className?: string;
  loading?: boolean;
  hasBorder?: boolean;
  size?: ElementSize;
}

export type TotalInfoType = {
  readonly ibcVolume?: number | null;
  readonly ibcVolumePending: number;
  readonly ibcTransfers: number;
  readonly ibcTransfersPending: number;
  readonly ibcVolumeChart?: ChartItemByString[];
};
