import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ColumnKeys } from '../Types';
import { AssetsTableRow } from './../useAssetsTable';

export interface TableRowProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  asset: AssetsTableRow;
  className?: string;
  index: number;
  isTableHorizontalScrollable?: boolean;
  selectedColumnKey: ColumnKeys;
}
