import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { CircleType } from './TableHeaderItem/TableHeaderItem.props';

export interface ConfigItem<T extends string> extends Object {
  circleType?: CircleType;
  columnKey?: T;
  explanationText?: string;
  isSelected?: boolean;
  isSticky?: boolean;
  title: string;
  withBorder?: boolean;
}

export interface TableHeaderProps<T extends string>
  extends DetailedHTMLProps<HTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {
  className?: string;
  config: ConfigItem<T>[];
  selectedColumnKey: T;
  setSelectedColumnKey: (value: T) => void;
}
