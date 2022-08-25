import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';

import { NumberType, PeriodKeys } from 'components';
import { TooltipPosition } from 'components/ui/ExplanationTooltip/ExplanationTooltip.props';
export interface ZoneOverviewItemProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  defaultLoadingValue?: string;
  loading?: boolean;
  numberType?: NumberType;
  period?: PeriodKeys;
  rowDirection?: boolean;
  title: string;
  tooltipPosition?: TooltipPosition;
  tooltipText?: string;
  value?: number | null;
}
