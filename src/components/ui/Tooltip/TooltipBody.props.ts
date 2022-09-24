import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TooltipBodyProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  className?: string;
  isFixed?: boolean;
}
