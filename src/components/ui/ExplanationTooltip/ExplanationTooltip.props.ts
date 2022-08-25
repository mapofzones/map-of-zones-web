import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ExplanationTooltipProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  text?: string;
  position?: TooltipPosition;
}

export type TooltipPosition = 'left' | 'right' | 'center';
