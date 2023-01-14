import { PendingIcon } from 'assets/icons';
import { NumberType } from 'components';
import { ChartType } from 'components/ChartContainer';
import { Circle } from 'components/ui/Circle';
import { ElementSize } from 'types/ElementSize';

import { IbcTransfersOverviewCardMetadata } from './ZoneOverviewIbcTransfersCard.types';

export const TRANSFERS_CARD_METADATA: IbcTransfersOverviewCardMetadata = {
  chartTypes: [ChartType.AREA, ChartType.BAR],
  numberType: NumberType.Number,
  dataset: {
    ibcTransfersCount: {
      title: 'IBC Transfers',
      tooltipText: 'Ibc Transfers',
      numberType: NumberType.Number,
      legendValueAccessorKey: 'totalIbcTransfersCount',
      chartValueAccessorKey: 'ibcTransfersCount',
      size: ElementSize.LARGE,
      showPeriod: true,
      defaultSkeletonText: '19 850',
      color: '#22AAFF',
      icon: <Circle color={'#22AAFF'} />, // get color from above property
      additional: false,
    },
    pending: {
      title: 'Processing',
      legendValueAccessorKey: 'totalPending',
      tooltipText: 'Processing (24h)',
      numberType: NumberType.Number,
      size: ElementSize.LARGE,
      showPeriod: true,
      defaultSkeletonText: '10',
      additional: true,
      icon: <PendingIcon />,
    },
  },
};
