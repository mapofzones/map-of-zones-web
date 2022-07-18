import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ColumnKeys } from './Types';

export interface TableHeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {
  selectedColumnKey: ColumnKeys;
  setSelectedColumnKey: (value: ColumnKeys) => void;
}
