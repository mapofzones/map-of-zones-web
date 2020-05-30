import { formatPercentage, formatNumber } from 'common/helper';

import TxsActivityCell from './cells/TxsActivity';

const columns = [
  {
    Header: '#',
    id: 'position',
    accessor: (originalRow, rowIndex) => rowIndex,
    Cell: ({ row, rows, state }) =>
      (state?.sortBy?.[0]?.desc ? rows : [...rows].reverse()).indexOf(row) + 1,
    disableSortBy: true,
  },
  {
    Header: 'Zone',
    accessor: 'name',
    id: 'name',
    disableSortBy: true,
  },
  {
    Header: 'IBC transfers',
    accessor: 'totalIbcTxs',
    id: 'totalIbcTxs',
    Cell: ({ cell }) => formatNumber(cell.value),
    zoneWeightAccessor: 'ibcTxsWeight',
    sortDescFirst: true,
    descr: 'Token transfers via IBC relayer',
  },
  {
    Header: 'Total Txs',
    accessor: 'totalTxs',
    id: 'totalTxs',
    Cell: ({ cell }) => formatNumber(cell.value),
    zoneWeightAccessor: 'txsWeight',
    sortDescFirst: true,
    descr: 'All transactions in a specified zone',
  },
  {
    Header: 'IBC share %',
    accessor: 'ibcPercentage',
    id: 'ibcPercentage',
    Cell: ({ cell }) => formatPercentage(cell.value),
    disableSortBy: true,
    descr:
      'The proportion of the number of transactions having IBC ' +
      'messages to the total number of transactions in a certain zone',
  },
  {
    Header: 'IBC out',
    accessor: 'ibcSent',
    id: 'ibcSent',
    Cell: ({ cell }) => formatNumber(cell.value),
    zoneWeightAccessor: 'ibcSentWeight',
    sortDescFirst: true,
    descr:
      'Transfers sent successfully from one zone to another zone (note: ' +
      'in order to be considered successful it has NOT to be received by the other zone)',
  },
  {
    Header: 'IBC in',
    accessor: 'ibcReceived',
    id: 'ibcReceived',
    Cell: ({ cell }) => formatNumber(cell.value),
    zoneWeightAccessor: 'ibcReceivedWeight',
    sortDescFirst: true,
    descr:
      'Successfully received token by a zone from another zone (completed token transfer)',
  },
  {
    Header: 'Channels',
    accessor: 'channels',
    id: 'channels',
    Cell: ({ cell }) => formatNumber(cell.value),
    descr: '',
    disableSortBy: true,
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
