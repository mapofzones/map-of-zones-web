import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TooltipProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  text?: string;
  className?: string;
}
