import { NumberType } from 'components';
import { ChartType } from 'components/ChartContainer';
import { Circle } from 'components/ui/Circle';
import { ElementSize } from 'types/ElementSize';

import { IbcVolumeOverviewCardMetadata } from './ZoneOverviewIbcVolume.types';

export const VOLUME_CARD_METADATA: IbcVolumeOverviewCardMetadata = {
  chartTypes: [ChartType.AREA, ChartType.BAR],
  numberType: NumberType.Currency,
  wrappedInSmallScreen: true,
  chartKeys: ['total', 'ibcIn', 'ibcOut'],
  dataset: {
    totalIbcVolume: {
      title: 'Total IBC',
      color: '#BFBFC3',
      tooltipText: 'Total IBC',
      numberType: NumberType.Currency,
      legendValueAccessorKey: 'totalIbc',
      chartValueAccessorKey: 'total',
      size: ElementSize.LARGE,
      showPeriod: true,
      defaultSkeletonText: '$1,414,795,629',
      icon: <Circle color={'#BFBFC3'} />,
      additional: false,
    },
    ibcVolumeIn: {
      title: 'IBC In',
      color: '#22AAFF',
      legendValueAccessorKey: 'totalIbcIn',
      chartValueAccessorKey: 'ibcIn',
      tooltipText: 'IBC In',
      numberType: NumberType.Currency,
      size: ElementSize.LARGE,
      showPeriod: false,
      defaultSkeletonText: '$34,824,000',
      additional: false,
      icon: <Circle color={'#22AAFF'} />,
    },
    ibcVolumeOut: {
      title: 'IBC Out',
      color: '#EE11CC',
      legendValueAccessorKey: 'totalIbcOut',
      chartValueAccessorKey: 'ibcOut',
      tooltipText: 'IBC Out',
      numberType: NumberType.Currency,
      size: ElementSize.LARGE,
      showPeriod: false,
      defaultSkeletonText: '$134,824,000',
      additional: false,
      icon: <Circle color={'#EE11CC'} />,
    },
  },
};
