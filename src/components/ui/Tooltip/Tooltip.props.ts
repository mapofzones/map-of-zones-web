import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TooltipProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  body: ReactNode;
  children: ReactNode;
  className?: string;
  isVertical?: boolean;
  margin?: number;
  maxWidth?: number;
  showTriangle?: boolean;
  text?: string;
  hideDelayMs?: number;
  onMouseEnter?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}
