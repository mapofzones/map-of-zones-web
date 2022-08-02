import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TableRowItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {
  children?: ReactNode;
  isSticky?: boolean;
  withBorder?: boolean;
}
