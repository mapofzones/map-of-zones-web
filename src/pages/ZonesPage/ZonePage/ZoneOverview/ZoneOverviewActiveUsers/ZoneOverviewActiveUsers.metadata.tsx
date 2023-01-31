import { NumberType } from 'components';
import { ChartType } from 'components/ChartContainer';
import { Circle } from 'components/ui/Circle';
import { ElementSize } from 'types/ElementSize';

import { ActiveUsersOverviewCardMetadata } from './ZoneOverviewActiveUsers.types';

export const ACTIVE_USERS_CARD_METADATA: ActiveUsersOverviewCardMetadata = {
  chartTypes: [ChartType.AREA, ChartType.BAR],
  numberType: NumberType.Number,
  chartKeys: ['activeAddressesCount', 'ibcActiveAddressesCount'],
  dataset: {
    dailyActiveUsers: {
      title: 'Active Users',
      tooltipText: 'Daily Active Users',
      numberType: NumberType.Number,
      legendValueAccessorKey: 'totalActiveAddresses',
      chartValueAccessorKey: 'activeAddressesCount',
      size: ElementSize.LARGE,
      showPeriod: true,
      defaultSkeletonText: '8 345',
      color: '#22AAFF',
      icon: <Circle color={'#22AAFF'} />,
      additional: false,
    },
    ibcActiveUsers: {
      title: 'IBC Active Users',
      tooltipText: 'IBC Daily Active Users',
      legendValueAccessorKey: 'totalIbcActiveAddresses',
      chartValueAccessorKey: 'ibcActiveAddressesCount',
      numberType: NumberType.Number,
      size: ElementSize.LARGE,
      showPeriod: false,
      defaultSkeletonText: '635',
      color: '#BFBFC3',
      icon: <Circle color={'#BFBFC3'} />,
      additional: false,
    },
  },
};
