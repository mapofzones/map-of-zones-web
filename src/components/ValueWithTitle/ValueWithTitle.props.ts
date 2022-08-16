import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import { NumberType } from 'components';
import { ElementSize } from 'types/ElementSize';

export interface ValueWithTitleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  alignRight?: boolean;
  children?: ReactNode;
  className?: string;
  numberType?: NumberType;
  pendingValue?: number | null;
  title: string;
  prefix?: string;
  suffix?: string;
  value?: number | null;
  size?: ElementSize;
}
