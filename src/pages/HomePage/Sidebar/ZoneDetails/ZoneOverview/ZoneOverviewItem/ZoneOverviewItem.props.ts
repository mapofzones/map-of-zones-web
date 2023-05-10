import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';

import { PeriodKeys } from 'components';
import { NumberType } from 'ui';

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
  tooltipText?: string;
  value?: number | null;
}
