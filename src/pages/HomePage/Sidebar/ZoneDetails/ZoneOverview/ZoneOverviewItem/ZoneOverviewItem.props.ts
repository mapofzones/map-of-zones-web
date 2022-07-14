import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';

import { NumberType } from 'components';
import { PeriodKeys } from 'pages/HomePage/Sidebar/ZonesInfo/Types';

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
}
