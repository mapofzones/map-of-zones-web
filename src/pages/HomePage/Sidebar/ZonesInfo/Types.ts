import { DropdownOption, NumberType } from 'components';
import { Zones_Stats_Select_Column } from 'graphql/base-types';
import { ColumnKeys } from 'pages/HomePage/Types';

export const COLUMN_OPTIONS: DropdownOption[] = [
  {
    key: ColumnKeys.IbcVolume,
    title: 'IBC Volume',
  },
  {
    key: ColumnKeys.IbcTransfers,
    title: 'IBC Transfers',
  },
  {
    key: ColumnKeys.TotalTxs,
    title: 'Total Txs',
  },
];

export const METADATA: Record<
  ColumnKeys,
  {
    numberType: NumberType;
    sortingColumnKey: Zones_Stats_Select_Column;
  }
> = {
  [ColumnKeys.IbcVolume]: {
    numberType: NumberType.Currency,
    sortingColumnKey: Zones_Stats_Select_Column.IbcCashflowMainnetRating,
  },
  [ColumnKeys.IbcTransfers]: {
    numberType: NumberType.Number,
    sortingColumnKey: Zones_Stats_Select_Column.IbcTransfersMainnetRating,
  },
  [ColumnKeys.TotalTxs]: {
    numberType: NumberType.Number,
    sortingColumnKey: Zones_Stats_Select_Column.TotalTxsMainnetRating,
  },
};
