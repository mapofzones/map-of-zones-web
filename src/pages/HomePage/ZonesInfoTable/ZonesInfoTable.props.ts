import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { NumberType } from 'components';
import { ZonesTableDataQueryResult } from 'graphql/HomePage/__generated__/ZonesTableData.generated';

import { ColumnKeys } from '../Types';

export interface ZonesInfoTableProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  data?: ZonesTableDataQueryResult;
  columnType: ColumnKeys;
  numberType: NumberType;
}
