import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface StatusCircleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  status?: boolean | null;
}
