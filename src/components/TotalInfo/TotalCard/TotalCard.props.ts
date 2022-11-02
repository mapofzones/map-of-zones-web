import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TotalCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  className?: string;
  loading?: boolean;
}
