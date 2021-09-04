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
    Header: 'IBC transfers',
    accessor: 'totalIbcTxsRating',
    id: 'totalIbcTxs',
    diffAccessor: 'totalIbcTxsDiff',
    ratingAccessor: 'totalIbcTxsRatingDiff',
    Cell: ({ cell }) => formatNumber(cell.row.original.totalIbcTxs),
    zoneWeightAccessor: 'ibcTxsWeight',
    tooltip: 'Token transfers via IBC relayer',
  },
  {
    Header: 'Total Txs',
    accessor: 'totalTxsRating',
    id: 'totalTxs',
    diffAccessor: 'totalTxsDiff',
    ratingAccessor: 'totalTxsRatingDiff',
    Cell: ({ cell }) => formatNumber(cell.row.original.totalTxs),
    zoneWeightAccessor: 'txsWeight',
    tooltip: 'All transactions in a specified zone',
  },
  {
    Header: 'IBC share %',
    accessor: 'ibcPercentage',
    id: 'ibcPercentage',
    Cell: ({ cell }) => formatPercentage(cell.value),
    disableSortBy: true,
    tooltip:
      'The proportion of the number of transactions having IBC ' +
      'messages to the total number of transactions in a certain zone',
  },
  {
    Header: 'IBC out',
    accessor: 'ibcSentRating',
    id: 'ibcSent',
    diffAccessor: 'ibcSentDiff',
    ratingAccessor: 'ibcSentRatingDiff',
    Cell: ({ cell }) => formatNumber(cell.row.original.ibcSent),
    zoneWeightAccessor: 'ibcSentWeight',
    tooltip:
      'Transfers sent successfully from one zone to another zone (note: ' +
      'in order to be considered successful it has NOT to be received by the other zone)',
  },
  {
    Header: 'IBC in',
    accessor: 'ibcReceivedRating',
    id: 'ibcReceived',
    diffAccessor: 'ibcReceivedDiff',
    ratingAccessor: 'ibcReceivedRatingDiff',
    Cell: ({ cell }) => formatNumber(cell.row.original.ibcReceived),
    zoneWeightAccessor: 'ibcReceivedWeight',
    tooltip:
      'Successfully received token by a zone from another zone (completed token transfer)',
  },
  {
    Header: 'Channels',
    accessor: 'channels',
    id: 'channels',
    Cell: ({ cell }) => formatNumber(cell.value),
    tooltip: 'Channels',
    disableSortBy: true,
  },
  {
    Header: 'Active Addresses',
    accessor: 'totalActiveAddressesRating',
    id: 'totalActiveAddresses',
    diffAccessor: 'totalActiveAddressesDiff',
    ratingAccessor: 'totalActiveAddressesRatingDiff',
    Cell: ({ cell }) => formatNumber(cell.row.original.totalActiveAddresses),
    tooltip: 'Active addresses',
    dependOnPeriod: true,
    zoneWeightAccessor: 'totalActiveAddressesWeight',
  },
  {
    Header: 'IBC transfers activity',
    Cell: TxsActivityCell,
    accessor: 'txsActivity',
    id: 'txsActivity',
    disableSortBy: true,
  },
];

export default columns;
