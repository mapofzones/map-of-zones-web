import { ChartType } from 'components/ChartContainer';
import { ElementSize } from 'types/ElementSize';
import { tooltips } from 'types/Tooltips';
import { Circle, NumberType } from 'ui';

import { IbcVolumeOverviewCardMetadata } from './ZoneOverviewIbcVolume.types';

export const VOLUME_CARD_METADATA: IbcVolumeOverviewCardMetadata = {
  chartTypes: [ChartType.AREA, ChartType.BAR],
  numberType: NumberType.Currency,
  wrappedInSmallScreen: true,
  chartKeys: ['total', 'ibcIn', 'ibcOut'],
  dataset: {
    totalIbcVolume: {
      title: 'Total IBC Volume',
      tooltipText: tooltips.ibcVolume(),
      numberType: NumberType.Currency,
      legendValueAccessorKey: 'totalIbc',
      chartValueAccessorKey: 'total',
      size: ElementSize.LARGE,
      showPeriod: false,
      defaultSkeletonText: '$1,414,795,629',
      color: '#BFBFC3',
      icon: <Circle color={'#BFBFC3'} />,
      additional: false,
    },
    ibcVolumeIn: {
      title: 'IBC Volume In',
      tooltipText: tooltips.ibcVolumeIn(),
      legendValueAccessorKey: 'totalIbcIn',
      chartValueAccessorKey: 'ibcIn',
      numberType: NumberType.Currency,
      size: ElementSize.LARGE,
      showPeriod: false,
      defaultSkeletonText: '$34,824,000',
      additional: false,
      color: '#22AAFF',
      icon: <Circle color={'#22AAFF'} />,
    },
    ibcVolumeOut: {
      title: 'IBC Volume Out',
      tooltipText: tooltips.ibcVolumeOut(),
      legendValueAccessorKey: 'totalIbcOut',
      chartValueAccessorKey: 'ibcOut',
      numberType: NumberType.Currency,
      size: ElementSize.LARGE,
      showPeriod: false,
      defaultSkeletonText: '$134,824,000',
      additional: false,
      color: '#EE11CC',
      icon: <Circle color={'#EE11CC'} />,
    },
  },
};
