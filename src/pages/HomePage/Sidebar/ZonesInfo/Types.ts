import { NumberType, PeriodKeys } from 'components';
import { ColumnKeys } from 'pages/HomePage/Types';
import { getDauTitleByPeriod } from 'utils/helper';

import { ZonesTableDataQueryItem } from './ZonesInfoTable/ZonesInfoTable.props';

export const getColumnOptions = (period: PeriodKeys) => [
  {
    key: ColumnKeys.IbcVolume,
    title: 'IBC Volume',
  },
  {
    key: ColumnKeys.TotalTxs,
    title: 'Total Txs',
  },
  {
    key: ColumnKeys.IbcTransfers,
    title: 'IBC Transfers',
  },
  {
    key: ColumnKeys.Dau,
    title: getDauTitleByPeriod(period),
  },
];

export const METADATA: Record<
  ColumnKeys,
  {
    numberType: NumberType;
    sortingColumnKey: keyof ZonesTableDataQueryItem;
  }
> = {
  [ColumnKeys.IbcVolume]: {
    numberType: NumberType.Currency,
    sortingColumnKey: 'ibcVolumeRating',
  },
  [ColumnKeys.IbcTransfers]: {
    numberType: NumberType.Number,
    sortingColumnKey: 'ibcTransfersRating',
  },
  [ColumnKeys.TotalTxs]: {
    numberType: NumberType.Number,
    sortingColumnKey: 'totalTxsRating',
  },
  [ColumnKeys.Dau]: {
    numberType: NumberType.Number,
    sortingColumnKey: 'dauRating',
  },
};
