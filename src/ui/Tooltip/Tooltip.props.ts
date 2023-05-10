import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TooltipProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  body: ReactNode;
  children: ReactNode;
  className?: string;
  isVertical?: boolean;
  margin?: number;
  maxWidth?: number;
  showTriangle?: boolean;
  text?: string;
}
