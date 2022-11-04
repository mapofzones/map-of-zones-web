import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TooltipProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  className?: string;
  text?: string;
  width?: number;
  margin?: number;
  body: ReactNode;
}
