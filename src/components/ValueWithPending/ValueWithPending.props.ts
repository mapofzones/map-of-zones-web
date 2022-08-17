import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import { NumberType } from 'components';
import { ElementSize } from 'types/ElementSize';

export interface ValueWithPendingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  alignRight?: boolean;
  children?: ReactNode;
  className?: string;
  numberType?: NumberType;
  pendingValue?: number | null;
  prefix?: string;
  size?: ElementSize;
  suffix?: string;
  title?: string;
  value?: number | null;
}
