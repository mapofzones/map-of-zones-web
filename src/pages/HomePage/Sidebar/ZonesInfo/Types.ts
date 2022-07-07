import { DropdownOption } from 'components/Dropdown/DropdownOption';
import { NumberType } from 'components/NumberFormat/NumberType';
import { Zones_Stats_Select_Column } from 'graphql/base-types';
import { ColumnKeys } from 'pages/HomePage/Types';

export enum PeriodKeys {
  DAY = '24h',
  WEEK = '7d',
  MONTH = '30d',
}

export const PERIODS: Record<PeriodKeys, number> = {
  '24h': 24,
  '7d': 24 * 7,
  '30d': 24 * 30,
};

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
    title: 'Total TXS',
  },
];
