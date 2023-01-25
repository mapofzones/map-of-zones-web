import { NumberType } from 'components';
import { ChartType } from 'components/ChartContainer';
import { Circle } from 'components/ui/Circle';
import { ElementSize } from 'types/ElementSize';

import { IbcTransactionsOverviewCardMetadata } from './ZoneOverviewIbcTransactions.types';

export const TRANSACTIONS_CARD_METADATA: IbcTransactionsOverviewCardMetadata = {
  chartTypes: [ChartType.AREA, ChartType.BAR],
  numberType: NumberType.Number,
  dataset: {
    ibcTransfersCount: {
      title: 'Total Transactions',
      tooltipText: 'Total Transactions',
      numberType: NumberType.Number,
      legendValueAccessorKey: 'totalTxsCount',
      chartValueAccessorKey: 'txsCount',
      size: ElementSize.LARGE,
      showPeriod: true,
      defaultSkeletonText: '19 850',
      color: '#22AAFF',
      icon: <Circle color={'#22AAFF'} />, // get color from above property
      additional: false,
    },
  },
};
