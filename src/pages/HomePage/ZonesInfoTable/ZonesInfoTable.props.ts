import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { NumberType } from '../../../components';
import { ColumnKeys } from '../Types';

export interface ZonesInfoTableProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  data: any;
  columnType: ColumnKeys;
  numberType: NumberType;
}
