import { CircleType } from 'components/Table/TableHeaderItem/TableHeaderItem.props';
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

export const TABLE_HEADER_CONFIG = [
  {
    title: '#',
  },
  {
    title: 'Name',
  },
  {
    title: 'IBC Volume',
    columnKey: ColumnKeys.IbcVolume,
    explanationText:
      'USD value of tokens successfully relayed via IBC transfer with pertinent volume in progress',
  },
  {
    title: 'IBC Volume In',
    columnKey: ColumnKeys.IbcVolumeReceived,
    explanationText:
      'USD value of tokens successfully received from other Zones with pertinent volume in progress',
    circleType: CircleType.Target,
  },
  {
    title: 'IBC Volume Out',
    columnKey: ColumnKeys.IbcVolumeSent,
    explanationText:
      'USD value of tokens successfully transferred to other Zones with pertinent volume in progress',
    circleType: CircleType.Source,
    withBorder: true,
  },
  {
    title: 'Total TXS',
    columnKey: ColumnKeys.TotalTxs,
    explanationText: 'All transactions in a specified zone',
  },
  {
    title: 'IBC Transfers',
    columnKey: ColumnKeys.IbcTransfers,
    explanationText:
      'Number of successfully relayed IBC transfers with pertinent quantity in progress',
    withBorder: true,
  },
  {
    title: 'Peers',
    explanationText:
      'Number of counterparties of a particular Zone with established IBC connectors',
  },
  {
    title: 'Channels',
    explanationText: 'Number of channels that connect a particular Zone to its counterparties',
    withBorder: true,
  },
  {
    title: 'DAU',
    columnKey: ColumnKeys.IbcActiveAddresses,
    explanationText: 'Number of Zone’s unique addresses initiated outward IBC transfer(s)',
    withBorder: true,
  },
  {
    title: 'IBC Transfers Activity',
  },
];
