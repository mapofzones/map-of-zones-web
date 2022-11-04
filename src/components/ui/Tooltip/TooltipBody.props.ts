import { DetailedHTMLProps, HTMLAttributes, ReactNode, RefObject } from 'react';

export interface TooltipBodyProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  className?: string;
  isFixed?: boolean;
  innerRef?: RefObject<HTMLDivElement>;
}
