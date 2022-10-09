import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import { NumberType } from 'components';
export interface ValueWithPercentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  numberType?: NumberType;
  percentValue?: number | null;
  value?: number | null;
}
