import { NumberType } from 'components';
import { ChartType } from 'components/ChartContainer';
import { Circle } from 'components/ui/Circle';
import { ElementSize } from 'types/ElementSize';

import { IbcDelegationsOverviewCardMetadata } from './ZoneOverviewDelegations.types';

export const DELEGATIONS_CARD_METADATA: IbcDelegationsOverviewCardMetadata = {
  chartTypes: [ChartType.AREA, ChartType.BAR],
  numberType: NumberType.Number,
  dataset: {
    delegated: {
      title: 'Delegated',
      tooltipText: 'Delegated',
      numberType: NumberType.Number,
      legendValueAccessorKey: 'totalDelegated',
      chartValueAccessorKey: 'delegationAmount',
      size: ElementSize.LARGE,
      showPeriod: true,
      defaultSkeletonText: '143 345',
      color: '#22AAFF',
      icon: <Circle color={'#22AAFF'} />,
      additional: false,
    },
    // redelegated: {
    //   title: 'Re-Delegated',
    //   tooltipText: 'Re-Delegated',
    //   numberType: NumberType.Number,
    //   legendValueAccessorKey: 'totalRedelegated',
    //   chartValueAccessorKey: 'redelegated',
    //   size: ElementSize.LARGE,
    //   showPeriod: false,
    //   defaultSkeletonText: '10 495',
    //   color: '#FF9900',
    //   icon: <Circle color={'#FF9900'} />,
    //   additional: false,
    // },
    undelegated: {
      title: 'Un-Delegated',
      tooltipText: 'Un-Delegated',
      numberType: NumberType.Number,
      legendValueAccessorKey: 'totalUndelegated',
      chartValueAccessorKey: 'undelegationAmount',
      size: ElementSize.LARGE,
      showPeriod: false,
      defaultSkeletonText: '1 495',
      color: '#FF4455',
      icon: <Circle color={'#FF4455'} />,
      additional: false,
    },
  },
};
