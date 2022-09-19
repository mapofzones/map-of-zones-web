import {
  Align,
  CircleType,
} from 'components/Table/TableHeader/TableHeaderItem/TableHeaderItem.props';
import { Ft_Channel_Group_Stats_Select_Column } from 'graphql/base-types';

import { ZonesListZoneDetails } from '../useZonesListZoneDetails';

export enum ColumnKeys {
  IbcVolumeReceived = 'ibcVolumeIn',
  IbcVolumeSent = 'ibcVolumeOut',
  IbcTransfers = 'ibcTransfers',
  IbcTransfersPending = 'ibcTransfersPending',
  IbcTransfersFailed = 'ibcTransfersFailed',
  SuccessRate = 'successRate',
}

export const getTableHeaderConfig = (zone: ZonesListZoneDetails) => [
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
    title: `${zone.name} Receives`,
    columnKey: ColumnKeys.IbcVolumeReceived,
    explanationText: 'Test text',
    circleType: CircleType.Target,
  },
  {
    title: `${zone.name} Sends`,
    columnKey: ColumnKeys.IbcVolumeSent,
    explanationText: 'Test text',
    circleType: CircleType.Source,
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

export const SORTING_COLUMN_KEYS: Record<ColumnKeys, Ft_Channel_Group_Stats_Select_Column> = {
  [ColumnKeys.IbcVolumeReceived]: Ft_Channel_Group_Stats_Select_Column.IbcCashflowIn,
  [ColumnKeys.IbcVolumeSent]: Ft_Channel_Group_Stats_Select_Column.IbcCashflowOut,
  [ColumnKeys.IbcTransfers]: Ft_Channel_Group_Stats_Select_Column.IbcTx,
  [ColumnKeys.IbcTransfersPending]: Ft_Channel_Group_Stats_Select_Column.IbcTxPending,
  [ColumnKeys.IbcTransfersFailed]: Ft_Channel_Group_Stats_Select_Column.IbcTxFailed,
  [ColumnKeys.SuccessRate]: Ft_Channel_Group_Stats_Select_Column.IbcTxSuccessRate,
};
