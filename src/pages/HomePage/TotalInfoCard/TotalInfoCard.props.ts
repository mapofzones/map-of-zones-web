import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { NumberType } from '../../../components';
import { ColumnKeys } from './../Types';

export interface TotalInfoCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  totalInfo: any;
  columnType: ColumnKeys;
  numberType: NumberType;
}
