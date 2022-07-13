import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  hasBorder?: boolean;
}
