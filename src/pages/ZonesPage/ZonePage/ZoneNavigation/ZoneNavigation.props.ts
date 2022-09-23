import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ZoneNavigationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  peersCount: number | null | undefined;
  useSmallView: boolean;
}
