import { Zones_Stats_Select_Column } from 'graphql/base-types';

export enum ColumnKeys {
  IbcActiveAddresses = 'ibcActiveAddresses',
  IbcTransfers = 'ibcTransfers',
  IbcVolume = 'ibcVolume',
  IbcVolumeReceived = 'ibcVolumeReceived',
  IbcVolumeSent = 'ibcVolumeSent',
  TotalTxs = 'totalTxs',
}

export const SORTING_COLUMN_KEYS: Record<ColumnKeys, Zones_Stats_Select_Column> = {
  [ColumnKeys.IbcActiveAddresses]: Zones_Stats_Select_Column.IbcActiveAddressesMainnetRating,
  [ColumnKeys.IbcTransfers]: Zones_Stats_Select_Column.IbcTransfersMainnetRating,
  [ColumnKeys.IbcVolume]: Zones_Stats_Select_Column.IbcCashflowMainnetRating,
  [ColumnKeys.IbcVolumeReceived]: Zones_Stats_Select_Column.IbcCashflowInMainnetRating,
  [ColumnKeys.IbcVolumeSent]: Zones_Stats_Select_Column.IbcCashflowOutMainnetRating,
  [ColumnKeys.TotalTxs]: Zones_Stats_Select_Column.TotalTxsMainnetRating,
};
