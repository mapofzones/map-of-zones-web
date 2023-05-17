import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import { ElementSize } from 'types/ElementSize';
import { NumberType } from 'types/NumberType';

export interface ValueWithPendingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  alignRight?: boolean;
  children?: ReactNode;
  className?: string;
  compact?: boolean;
  defaultSkeletonText?: string;
  loading?: boolean;
  numberType?: NumberType;
  pendingValue?: number | null;
  showPeriod?: boolean;
  size?: ElementSize;
  title?: string;
  titleIcon?: ReactNode;
  tooltipText?: string;
  value?: number | null;
  variants?: 'primary' | 'secondary';
}
