import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import { NumberType } from 'components';
import { ElementSize } from 'types/ElementSize';

export interface ValueWithPendingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  alignRight?: boolean;
  children?: ReactNode;
  className?: string;
  compact?: boolean;
  defaultSkeletonText?: string;
  titleIcon?: ReactNode;
  loading?: boolean;
  numberType?: NumberType;
  pendingValue?: number | null;
  showPeriod?: boolean;
  size?: ElementSize;
  title?: string;
  tooltipText?: string;
  value?: number | null;
  valuePostfixComponent?: ReactNode;
  variants?: 'primary' | 'secondary';
}
