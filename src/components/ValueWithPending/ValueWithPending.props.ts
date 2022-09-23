import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import { NumberType } from 'components';
import { TooltipPosition } from 'components/ui/ExplanationTooltip/ExplanationTooltip.props';
import { ElementSize } from 'types/ElementSize';

export interface ValueWithPendingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  alignRight?: boolean;
  children?: ReactNode;
  className?: string;
  compact?: boolean;
  numberType?: NumberType;
  pendingValue?: number | null;
  size?: ElementSize;
  title?: string;
  value?: number | null;
  tooltipPosition?: TooltipPosition;
  tooltipText?: string;
  defaultSkeletonText?: string;
  loading?: boolean;
}
