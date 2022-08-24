import { DropdownOption, NumberType } from 'components';
import { Flat_Blockchain_Switched_Stats_Select_Column } from 'graphql/base-types';
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
    sortingColumnKey: Flat_Blockchain_Switched_Stats_Select_Column;
  }
> = {
  [ColumnKeys.IbcVolume]: {
    numberType: NumberType.Currency,
    sortingColumnKey: Flat_Blockchain_Switched_Stats_Select_Column.IbcCashflowRating,
  },
  [ColumnKeys.IbcTransfers]: {
    numberType: NumberType.Number,
    sortingColumnKey: Flat_Blockchain_Switched_Stats_Select_Column.IbcTransfersRating,
  },
  [ColumnKeys.TotalTxs]: {
    numberType: NumberType.Number,
    sortingColumnKey: Flat_Blockchain_Switched_Stats_Select_Column.TxsRating,
  },
};
