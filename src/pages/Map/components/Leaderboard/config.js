import { formatPercentage, formatNumber } from 'common/helper';

import TxsActivityCell from './cells/TxsActivity';

const columns = [
  {
    Header: '#',
    id: 'position',
    accessor: 'totalIbcTxsRating',
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
    accessor: 'totalIbcTxs',
    id: 'totalIbcTxs',
    diffAccessor: 'totalIbcTxsDiff',
    Cell: ({ cell }) => formatNumber(cell.value),
    zoneWeightAccessor: 'ibcTxsWeight',
    sortDescFirst: true,
    tooltip: 'Token transfers via IBC relayer',
  },
  {
    Header: 'Total Txs',
    accessor: 'totalTxs',
    id: 'totalTxs',
    diffAccessor: 'totalTxsDiff',
    Cell: ({ cell }) => formatNumber(cell.value),
    zoneWeightAccessor: 'txsWeight',
    sortDescFirst: true,
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
    accessor: 'ibcSent',
    id: 'ibcSent',
    diffAccessor: 'ibcSentDiff',
    Cell: ({ cell }) => formatNumber(cell.value),
    zoneWeightAccessor: 'ibcSentWeight',
    sortDescFirst: true,
    tooltip:
      'Transfers sent successfully from one zone to another zone (note: ' +
      'in order to be considered successful it has NOT to be received by the other zone)',
  },
  {
    Header: 'IBC in',
    accessor: 'ibcReceived',
    id: 'ibcReceived',
    diffAccessor: 'ibcReceivedDiff',
    Cell: ({ cell }) => formatNumber(cell.value),
    zoneWeightAccessor: 'ibcReceivedWeight',
    sortDescFirst: true,
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
    id: 'totalActiveAddresses',
    accessor: 'totalActiveAddressesWeight',
    Cell: ({ cell }) => formatNumber(cell.value),
    tooltip: 'Active addresses',
    dependOnPeriod: true,
    zoneWeightAccessor: 'totalActiveAddressesWeight',
    sortDescFirst: true,
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
