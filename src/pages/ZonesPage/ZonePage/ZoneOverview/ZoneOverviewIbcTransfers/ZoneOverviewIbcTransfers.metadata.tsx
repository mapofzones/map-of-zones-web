import { PendingIcon } from 'assets/icons';
import { NumberType } from 'components';
import { ChartType } from 'components/ChartContainer';
import { Circle } from 'components/ui/Circle';
import { ElementSize } from 'types/ElementSize';

import { IbcTransfersOverviewCardMetadata } from './ZoneOverviewIbcTransfersCard.types';

export const TRANSFERS_CARD_METADATA: IbcTransfersOverviewCardMetadata = {
  chartTypes: [ChartType.AREA, ChartType.BAR],
  numberType: NumberType.Number,
  chartKeys: [
    'ibcTransfersCount',
    'ibcTransfersFailedCount',
    'ibcTransfersInCount',
    'ibcTransfersOutCount',
  ],
  wrappedInSmallScreen: true,
  dataset: {
    total: {
      title: 'Total IBC Transfers',
      tooltipText: 'Ibc Transfers',
      numberType: NumberType.Number,
      legendValueAccessorKey: 'totalIbcTransfersCount',
      chartValueAccessorKey: 'ibcTransfersCount',
      size: ElementSize.LARGE,
      showPeriod: false,
      defaultSkeletonText: '19 850',
      color: '#BFBFC3',
      icon: <Circle color={'#BFBFC3'} />, // get color from above property
      additional: false,
    },
    in: {
      title: 'IBC Transfers In',
      tooltipText: 'Ibc Transfers',
      numberType: NumberType.Number,
      legendValueAccessorKey: 'ibcTransfersInCount',
      chartValueAccessorKey: 'ibcTransfersInCount',
      size: ElementSize.LARGE,
      showPeriod: false,
      defaultSkeletonText: '19 850',
      color: '#22AAFF',
      icon: <Circle color={'#22AAFF'} />, // get color from above property
      additional: false,
    },
    out: {
      title: 'IBC Transfers Out',
      tooltipText: 'Ibc Transfers',
      numberType: NumberType.Number,
      legendValueAccessorKey: 'ibcTransfersOutCount',
      chartValueAccessorKey: 'ibcTransfersOutCount',
      size: ElementSize.LARGE,
      showPeriod: false,
      defaultSkeletonText: '19 850',
      color: '#EE11CC',
      icon: <Circle color={'#EE11CC'} />, // get color from above property
      additional: false,
    },
  },
};
