import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ExplanationTooltipProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  className?: string;
  text?: string;
}
