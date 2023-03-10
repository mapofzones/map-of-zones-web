import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { AssetsTableRow } from './../useAssetsTable';
import { ColumnKeys } from '../Types';

export interface TableRowProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  asset: AssetsTableRow;
  className?: string;
  index: number;
  isTableHorizontalScrollable?: boolean;
  selectedColumnKey: ColumnKeys;
}
