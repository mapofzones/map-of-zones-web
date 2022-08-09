import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ShowMoreRowProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  count: number;
  isTableHorizontalScrollable?: boolean;
  showMoreChannels: () => void;
}
