import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ScrollableContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  children: ReactNode;
  vertical?: boolean;
  horizontal?: boolean;
}
