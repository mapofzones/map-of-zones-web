import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import { ElementSize } from 'types/ElementSize';

export interface ButtonGroupItem<T> {
  key?: T;
  title: string;
}

export interface ButtonGroupProps<T>
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  buttons?: ButtonGroupItem<T>[];
  className?: string;
  children?: ReactNode;
  isActive?: (key: string) => boolean;
  setSelectedButton?: (item: ButtonGroupItem<T>) => void;
  size?: ElementSize;
}
