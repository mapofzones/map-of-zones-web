import {
  Align,
  CircleType,
} from 'components/Table/TableHeader/TableHeaderItem/TableHeaderItem.props';
import { Ft_Channel_Group_Stats_Select_Column } from 'graphql/base-types';

export enum ColumnKeys {
  IbcVolumeReceived = 'ibcVolumeIn',
  IbcVolumeSent = 'ibcVolumeOut',
  IbcTransfers = 'ibcTransfers',
  IbcTransfersPending = 'ibcTransfersPending',
  IbcTransfersFailed = 'ibcTransfersFailed',
  SuccessRate = 'successRate',
}

export const SORTING_COLUMN_KEYS: Record<ColumnKeys, Ft_Channel_Group_Stats_Select_Column> = {
  [ColumnKeys.IbcVolumeReceived]: Ft_Channel_Group_Stats_Select_Column.IbcCashflowIn,
  [ColumnKeys.IbcVolumeSent]: Ft_Channel_Group_Stats_Select_Column.IbcCashflowOut,
  [ColumnKeys.IbcTransfers]: Ft_Channel_Group_Stats_Select_Column.IbcTx,
  [ColumnKeys.IbcTransfersPending]: Ft_Channel_Group_Stats_Select_Column.IbcTxPending,
  [ColumnKeys.IbcTransfersFailed]: Ft_Channel_Group_Stats_Select_Column.IbcTxFailed,
  [ColumnKeys.SuccessRate]: Ft_Channel_Group_Stats_Select_Column.IbcTxSuccessRate,
};

export const TABLE_HEADER_CONFIG = [
  {
    title: 'Peer',
    isSticky: true,
    align: Align.Left,
  },
  {
    title: 'Total IBC Volume',
    columnKey: ColumnKeys.IbcVolumeSent,
    explanationText: 'Test text',
    withBorder: true,
  },
  {
    title: 'Injective Sends',
    columnKey: ColumnKeys.IbcVolumeSent,
    explanationText: 'Test text',
    circleType: CircleType.Source,
  },
  {
    title: 'Injective Receives',
    columnKey: ColumnKeys.IbcVolumeReceived,
    explanationText: 'Test text',
    circleType: CircleType.Target,
    withBorder: true,
  },
  {
    title: 'IBC Success',
    columnKey: ColumnKeys.IbcTransfers,
    explanationText: 'Test text',
  },
  {
    title: 'IBC Pending',
    columnKey: ColumnKeys.IbcTransfersPending,
    explanationText: 'Test text',
  },
  {
    title: 'IBC Failed',
    columnKey: ColumnKeys.IbcTransfersFailed,
    explanationText: 'Test text',
    withBorder: true,
  },
  {
    title: 'Success Rate',
    columnKey: ColumnKeys.SuccessRate,
    explanationText: 'Test text',
  },
];