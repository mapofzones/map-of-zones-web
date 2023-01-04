import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  loading?: boolean;
  hasBorder?: boolean;
  title?: string;
}
