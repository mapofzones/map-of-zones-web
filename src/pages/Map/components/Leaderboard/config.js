import React from 'react';
import { FormattedNumber } from 'react-intl';
import { formatPercentage, formatNumber } from 'common/helper';

import TxsActivityCell from './cells/TxsActivity';

const columns = [
  {
    Header: '#',
    id: 'position',
    accessor: (originalRow, rowIndex) => rowIndex,
    Cell: ({ row, rows, state }) =>
      (state?.sortBy?.[0]?.desc ? [...rows].reverse() : rows).indexOf(row) + 1,
    disableSortBy: true,
    alwaysVisible: true,
  },
  {
    Header: '',
    accessor: 'zoneLabelUrl',
    id: 'zoneLabelUrl',
    disableSortBy: true,
    alwaysVisible: true,
  },
  {
    Header: 'Zone',
    accessor: 'name',
    id: 'name',
    disableSortBy: true,
    alwaysVisible: true,
  },
  {
    Header: 'IBC volume, $',
    accessor: 'ibcVolumeRating',
    id: 'ibcVolume',
    diffAccessor: 'ibcVolumeDiff',
    pendingAccessor: 'ibcVolumePending',
    ratingAccessor: 'ibcVolumeRatingDiff',
    Cell: ({ cell }) => (
      <FormattedNumber
        value={cell.row.original.ibcVolume}
        style="currency"
        currency="USD"
        maximumFractionDigits="0"
      />
    ),
    zoneWeightAccessor: 'ibcVolumeWeight',
    tooltip: 'Volume transferred via IBC relayer',
  },
  {
    Header: 'IBC transfers',
    accessor: 'ibcTransfersRating',
    id: 'ibcTransfers',
    diffAccessor: 'ibcTransfersDiff',
    pendingAccessor: 'ibcTransfersPending',
    ratingAccessor: 'ibcTransfersRatingDiff',
    Cell: ({ cell }) => formatNumber(cell.row.original.ibcTransfers),
    zoneWeightAccessor: 'ibcTransfersWeight',
    tooltip: 'Token transfers via IBC relayer',
  },
  // {
  //   Header: 'Total Txs',
  //   accessor: 'totalTxsRating',
  //   id: 'totalTxs',
  //   diffAccessor: 'totalTxsDiff',
  //   ratingAccessor: 'totalTxsRatingDiff',
  //   Cell: ({ cell }) =>
  //     cell.row.original.totalTxs === null
  //       ? '-'
  //       : formatNumber(cell.row.original.totalTxs),
  //   zoneWeightAccessor: 'txsWeight',
  //   tooltip: 'All transactions in a specified zone',
  // },
  // {
  //   Header: 'IBC share %',
  //   accessor: 'ibcPercentage',
  //   id: 'ibcPercentage',
  //   Cell: ({ cell }) =>
  //     cell.value === null ? '-' : formatPercentage(cell.value),
  //   disableSortBy: true,
  //   tooltip:
  //     'The proportion of the number of transactions having IBC ' +
  //     'messages to the total number of transactions in a certain zone',
  // },
  // {
  //   Header: 'IBC out',
  //   accessor: 'ibcSentRating',
  //   id: 'ibcSent',
  //   diffAccessor: 'ibcSentDiff',
  //   ratingAccessor: 'ibcSentRatingDiff',
  //   Cell: ({ cell }) => formatNumber(cell.row.original.ibcSent),
  //   zoneWeightAccessor: 'ibcSentWeight',
  //   tooltip:
  //     'Transfers sent successfully from one zone to another zone (note: ' +
  //     'in order to be considered successful it has NOT to be received by the other zone)',
  // },
  // {
  //   Header: 'IBC in',
  //   accessor: 'ibcReceivedRating',
  //   id: 'ibcReceived',
  //   diffAccessor: 'ibcReceivedDiff',
  //   ratingAccessor: 'ibcReceivedRatingDiff',
  //   Cell: ({ cell }) => formatNumber(cell.row.original.ibcReceived),
  //   zoneWeightAccessor: 'ibcReceivedWeight',
  //   tooltip:
  //     'Successfully received token by a zone from another zone (completed token transfer)',
  // },
  {
    Header: 'IBC out, $',
    accessor: 'ibcVolumeSentRating',
    id: 'ibcVolumeSent',
    diffAccessor: 'ibcVolumeSentDiff',
    pendingAccessor: 'ibcVolumeSentPending',
    ratingAccessor: 'ibcVolumeSentRatingDiff',
    Cell: ({ cell }) => (
      <FormattedNumber
        value={cell.row.original.ibcVolumeSent}
        style="currency"
        currency="USD"
        maximumFractionDigits="0"
      />
    ),
    zoneWeightAccessor: 'ibcVolumeSentWeight',
    tooltip:
      'Transfers sent successfully from one zone to another zone (note: ' +
      'in order to be considered successful it has NOT to be received by the other zone)',
  },
  {
    Header: 'IBC in, $',
    accessor: 'ibcVolumeReceivedRating',
    id: 'ibcVolumeReceived',
    diffAccessor: 'ibcVolumeReceivedDiff',
    pendingAccessor: 'ibcVolumeReceivedPending',
    ratingAccessor: 'ibcVolumeReceivedRatingDiff',
    Cell: ({ cell }) => (
      <FormattedNumber
        value={cell.row.original.ibcVolumeReceived}
        style="currency"
        currency="USD"
        maximumFractionDigits="0"
      />
    ),
    zoneWeightAccessor: 'ibcVolumeReceivedWeight',
    tooltip:
      'Successfully received token by a zone from another zone (completed token transfer)',
  },
  // {
  //   Header: 'Channels',
  //   accessor: 'channels',
  //   id: 'channels',
  //   Cell: ({ cell }) => (cell.value === null ? '-' : formatNumber(cell.value)),
  //   tooltip: 'Channels',
  //   disableSortBy: true,
  // },
  {
    Header: 'Active Addresses',
    accessor: 'totalActiveAddressesRating',
    id: 'totalActiveAddresses',
    diffAccessor: 'totalActiveAddressesDiff',
    ratingAccessor: 'totalActiveAddressesRatingDiff',
    Cell: ({ cell }) =>
      cell.row.original.totalActiveAddresses === null
        ? '-'
        : formatNumber(cell.row.original.totalActiveAddresses),
    tooltip: 'Active addresses',
    dependOnPeriod: true,
    zoneWeightAccessor: 'totalActiveAddressesWeight',
  },
  {
    Header: 'IBC volume activity',
    Cell: TxsActivityCell,
    accessor: 'txsActivity', // TODO
    id: 'txsActivity',
    disableSortBy: true,
  },
];

export default columns;
