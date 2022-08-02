import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TooltipValueProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  title: string;
  subtitle: string;
}
