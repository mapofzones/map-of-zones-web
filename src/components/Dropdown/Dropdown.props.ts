import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface DropdownProps<T>
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  initialSelectedKey: string;
  options: T[];
  keyExtractor: (option: T) => string;
  titleExtractor?: (option: T) => ReactNode;
  className?: string;
  onOptionSelected?: (option: string) => void;
}
