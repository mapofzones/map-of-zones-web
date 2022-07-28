import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface NavigationButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  count?: number | null;
  children: ReactNode;
  to: string;
}
