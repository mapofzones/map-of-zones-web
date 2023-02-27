import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ZoneNavigationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  peersCount: number | null | undefined;
  useSmallView: boolean;
}
