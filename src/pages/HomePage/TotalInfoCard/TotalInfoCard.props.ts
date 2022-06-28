import { ColumnKeys } from './../Types';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { NumberType } from '../../../components';

export interface TotalInfoCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  totalInfo: any;
  columnType: ColumnKeys;
  numberType: NumberType;
}
