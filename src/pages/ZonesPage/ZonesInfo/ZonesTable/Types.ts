import { PeriodKeys } from 'components';
import {
  Align,
  CircleType,
} from 'components/Table/TableHeader/TableHeaderItem/TableHeaderItem.props';
import { tooltips } from 'types/Tooltips';
import { getDauTitleByPeriod } from 'utils/helper';

import { ZoneData } from './TableRow/TableRow.props';

export enum ColumnKeys {
  ActiveAddresses = 'activeAddresses',
  IbcTransfers = 'ibcTransfers',
  IbcVolume = 'ibcVolume',
  IbcVolumeReceived = 'ibcVolumeReceived',
  IbcVolumeSent = 'ibcVolumeSent',
  TotalTxs = 'totalTxs',
}

export function getTableHeaderConfigByPeriod(period: PeriodKeys) {
  return [
    {
      title: '#',
      align: Align.Center,
      isSticky: true,
    },
    {
      title: 'Name',
      align: Align.Left,
      isSticky: true,
    },
    {
      title: 'IBC Volume',
      columnKey: ColumnKeys.IbcVolume,
      explanationText: tooltips['ibcVolume'](),
    },
    {
      title: 'IBC Volume In',
      columnKey: ColumnKeys.IbcVolumeReceived,
      explanationText: tooltips['ibcVolumeIn'](),
      circleType: CircleType.Target,
    },
    {
      title: 'IBC Volume Out',
      columnKey: ColumnKeys.IbcVolumeSent,
      explanationText: tooltips['ibcVolumeOut'](),
      circleType: CircleType.Source,
      withBorder: true,
    },
    {
      title: 'Total Txs',
      columnKey: ColumnKeys.TotalTxs,
      explanationText: tooltips['totalTxs'](),
    },
    {
      title: 'IBC Transfers',
      columnKey: ColumnKeys.IbcTransfers,
      explanationText: tooltips['ibcTransfers'](),
      withBorder: true,
    },
    {
      title: 'Peers',
      explanationText: tooltips['peersCount'](),
    },
    {
      title: 'Channels',
      explanationText: tooltips['channelsCount'](),
      withBorder: true,
    },
    {
      title: getDauTitleByPeriod(period),
      columnKey: ColumnKeys.ActiveAddresses,
      explanationText: tooltips['dau'](period),
      withBorder: true,
    },
    {
      title: 'IBC Volume Activity',
    },
  ];
}

export const SORTING_COLUMN_KEYS: Record<ColumnKeys, keyof ZoneData> = {
  [ColumnKeys.ActiveAddresses]: 'dauRating',
  [ColumnKeys.IbcTransfers]: 'ibcTransfersRating',
  [ColumnKeys.IbcVolume]: 'ibcVolumeRating',
  [ColumnKeys.IbcVolumeReceived]: 'ibcVolumeInRating',
  [ColumnKeys.IbcVolumeSent]: 'ibcVolumeOutRating',
  [ColumnKeys.TotalTxs]: 'totalIbcTxsRating',
};
