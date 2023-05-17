import { ChartType } from 'types/ChartType';
import { ElementSize } from 'types/ElementSize';
import { NumberType } from 'types/NumberType';
import { Circle } from 'ui';

import { ActiveUsersOverviewCardMetadata } from './ZoneOverviewActiveUsers.types';

export const ACTIVE_USERS_CARD_METADATA: ActiveUsersOverviewCardMetadata = {
  chartTypes: [ChartType.AREA, ChartType.BAR],
  numberType: NumberType.Number,
  chartKeys: ['activeAddressesCount', 'ibcActiveAddressesCount'],
  dataset: {
    dailyActiveUsers: {
      title: 'Active Addresses',
      tooltipText: 'Daily Active Addresses',
      numberType: NumberType.Number,
      chartValueAccessorKey: 'activeAddressesCount',
      size: ElementSize.LARGE,
      showPeriod: false,
      defaultSkeletonText: '8 345',
      color: '#22AAFF',
      icon: <Circle color={'#22AAFF'} />,
      additional: false,
    },
    ibcActiveUsers: {
      title: 'IBC Active Addresses',
      tooltipText: 'IBC Daily Active Addresses',
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
