import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { PeriodKeys } from 'components';

import { ZoneOverviewReturnedAddressesDataByType } from '../../pages/ZonesPage/ZonePage/ZoneOverview/ZoneOverviewReturnedAddresses/types';

export interface OverviewReturnedAddressesChartProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  loading?: boolean;
  data: ZoneOverviewReturnedAddressesDataByType;
  period: PeriodKeys;
}
