import { NumberType } from 'components';
import { ChartType } from 'components/ChartContainer';
import { Circle } from 'components/ui/Circle';
import { ElementSize } from 'types/ElementSize';
import { tooltips } from 'types/Tooltips';

import { IbcTransfersOverviewCardMetadata } from './ZoneOverviewUniqueDelegates.types';

export const UNIQUE_DELEGATES_CARD_METADATA: IbcTransfersOverviewCardMetadata = {
  chartTypes: [ChartType.AREA, ChartType.BAR],
  numberType: NumberType.Number,
  chartKeys: ['delegatorsCount'],
  dataset: {
    delegates: {
      title: 'Delegators',
      tooltipText: tooltips.delegators(),
      numberType: NumberType.Number,
      legendValueAccessorKey: 'totalDelegatorsCount',
      chartValueAccessorKey: 'delegatorsCount',
      size: ElementSize.LARGE,
      showPeriod: false,
      defaultSkeletonText: '19 850',
      color: '#22AAFF',
      icon: <Circle color={'#22AAFF'} />, // get color from above property
      additional: false,
    },
  },
};
