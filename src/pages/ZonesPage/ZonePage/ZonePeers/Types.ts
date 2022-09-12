import {
  Align,
  CircleType,
} from 'components/Table/TableHeader/TableHeaderItem/TableHeaderItem.props';
import { tooltips } from 'types/Tooltips';

import { ZonesListZoneDetails } from '../useZonesListZoneDetails';
import { ZoneChannelRowData } from './TableRow/TableRow.props';

export interface BlockchainChannel {
  zone: string;
  zoneCounterpartyChannelId: string;
  channelId: string;
  clientId: string;
  connectionId: string;
  isOpened: boolean;
  ibcTransfers: number;
  ibcTransfersPending: number;
  ibcTransfersFailed: number;
  ibcTransfersSuccessRate: number;
  ibcVolume?: number | null;
  ibcVolumePending?: number | null;
  ibcVolumeIn: number;
  ibcVolumeInPending: number;
  ibcVolumeOut: number;
  ibcVolumeOutPending: number;
}

export enum ColumnKeys {
  IbcVolumeTotal = 'ibcVolume',
  IbcVolumeReceived = 'ibcVolumeIn',
  IbcVolumeSent = 'ibcVolumeOut',
  IbcTransfers = 'ibcTransfers',
  IbcTransfersPending = 'ibcTransfersPending',
  IbcTransfersFailed = 'ibcTransfersFailed',
  SuccessRate = 'ibcTransfersSuccessRate',
}

export const getTableHeaderConfig = (zone: ZonesListZoneDetails) => [
  {
    title: 'Peer',
    isSticky: true,
    align: Align.Left,
  },
  {
    title: 'Total IBC Volume',
    columnKey: ColumnKeys.IbcVolumeTotal,
    explanationText: tooltips['ibcVolume'](),
    withBorder: true,
  },
  {
    title: `${zone.name} Receives`,
    columnKey: ColumnKeys.IbcVolumeReceived,
    explanationText: tooltips['ibcVolumeIn'](),
    circleType: CircleType.Target,
    withBorder: true,
  },
  {
    title: `${zone.name} Sends`,
    columnKey: ColumnKeys.IbcVolumeSent,
    explanationText: tooltips['ibcVolumeOut'](),
    circleType: CircleType.Source,
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

export const SORTING_COLUMN_KEYS: Record<ColumnKeys, keyof ZoneChannelRowData> = {
  [ColumnKeys.IbcVolumeTotal]: 'ibcVolume',
  [ColumnKeys.IbcVolumeReceived]: 'ibcVolumeIn',
  [ColumnKeys.IbcVolumeSent]: 'ibcVolumeOut',
  [ColumnKeys.IbcTransfers]: 'ibcTransfers',
  [ColumnKeys.IbcTransfersPending]: 'ibcTransfersPending',
  [ColumnKeys.IbcTransfersFailed]: 'ibcTransfersFailed',
  [ColumnKeys.SuccessRate]: 'ibcTransfersSuccessRate',
};
