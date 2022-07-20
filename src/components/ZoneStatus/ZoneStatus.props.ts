import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ZoneStatusProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  status?: boolean | null;
}
