import { ChartType } from 'components/ChartContainer';
import { ElementSize } from 'types/ElementSize';
import { tooltips } from 'types/Tooltips';
import { Circle, NumberType } from 'ui';

import { IbcTransactionsOverviewCardMetadata } from './ZoneOverviewIbcTransactions.types';

export const TRANSACTIONS_CARD_METADATA: IbcTransactionsOverviewCardMetadata = {
  chartTypes: [ChartType.AREA, ChartType.BAR],
  numberType: NumberType.Number,
  chartKeys: ['txsCount'],
  dataset: {
    ibcTransfersCount: {
      title: 'Total Transactions',
      tooltipText: tooltips.totalTxs(),
      numberType: NumberType.Number,
      legendValueAccessorKey: 'totalTxsCount',
      chartValueAccessorKey: 'txsCount',
      size: ElementSize.LARGE,
      showPeriod: false,
      defaultSkeletonText: '19 850',
      color: '#22AAFF',
      icon: <Circle color={'#22AAFF'} />, // get color from above property
      additional: false,
    },
  },
};
