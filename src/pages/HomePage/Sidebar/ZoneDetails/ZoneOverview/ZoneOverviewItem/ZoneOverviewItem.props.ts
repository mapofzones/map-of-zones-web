import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';

import { NumberType, PeriodKeys } from 'components';
export interface ZoneOverviewItemProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  period?: PeriodKeys;
  value?: number | null;
  className?: string;
  children?: ReactNode;
  numberType?: NumberType;
  loading?: boolean;
  defaultLoadingValue?: string;
  rowLoyout?: boolean;
}
