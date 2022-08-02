import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import { ConfigItem } from './TableHeader/TableHeader.props';

export interface TableProps<T extends string>
  extends DetailedHTMLProps<HTMLAttributes<HTMLTableElement>, HTMLTableElement> {
  children: ReactNode;
  className?: string;
  headerConfig: ConfigItem<T>[];
  selectedColumnKey: T;
  setSelectedColumnKey: (value: T) => void;
}
