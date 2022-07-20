import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ColumnKeys } from '../Types';

export interface TableHeaderItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {
  circleType?: CircleType;
  columnKey?: ColumnKeys;
  explanationText?: string;
  isSelected: boolean;
  setSelectedColumnKey: (value: ColumnKeys) => void;
  title: string;
  withBorder?: boolean;
}

export enum CircleType {
  Source = 'source',
  Target = 'target',
}
