import { OverviewCardMetadata } from 'components/OverviewChartCardWithMetadata';
import { ChartType } from 'types/ChartType';
import { ElementSize } from 'types/ElementSize';
import { NumberType } from 'types/NumberType';
import { tooltips } from 'types/Tooltips';
import { Circle } from 'ui';

import {
  UniqueDelegatorsChart,
  AnalysisUniqueDelegatorsCardData,
} from '../../../../../types/models/Analysis/ZoneAnalysisUniqueDelegators';

export type IbcTransfersOverviewCardMetadata = OverviewCardMetadata<
  AnalysisUniqueDelegatorsCardData,
  UniqueDelegatorsChart
>;

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
