import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { PeriodKeys } from 'components';

import { ZoneOverviewReturnedAddressesDataByType } from '../types';

export interface OverviewReturnedAddressesChartProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  loading?: boolean;
  data: ZoneOverviewReturnedAddressesDataByType;
  period: PeriodKeys;
}
