import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PointerAreaWrapperProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  areaScale?: number;
  circle?: boolean;
}
