import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TableHeaderItemProps<T extends string>
  extends DetailedHTMLProps<HTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {
  circleType?: CircleType;
  columnKey?: T;
  explanationText?: string;
  isSelected: boolean;
  isSticky?: boolean;
  setSelectedColumnKey: (value: T) => void;
  title: string;
  withBorder?: boolean;
}

export enum CircleType {
  Source = 'source',
  Target = 'target',
}
