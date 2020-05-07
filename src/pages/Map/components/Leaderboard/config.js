import { roundNumber } from 'common/helper';

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
    Header: 'Total IBC Txs',
    accessor: 'totalIbcTxs',
    id: 'totalIbcTxs',
    zoneWeightAccessor: 'ibcTxsWeight',
    sortDescFirst: true,
    descr: 'Transactions that transfer data via IBC relayer',
  },
  {
    Header: 'Total Txs',
    accessor: 'totalTxs',
    id: 'totalTxs',
    zoneWeightAccessor: 'txsWeight',
    sortDescFirst: true,
    descr: 'All transactions in a specified zone (internal and IBC)',
  },
  {
    Header: 'IBC share %',
    accessor: 'ibcPercentage',
    id: 'ibcPercentage',
    Cell: ({ cell }) => roundNumber(cell.value, 2),
    disableSortBy: true,
  },
  {
    Header: 'IBC out',
    accessor: 'ibcSent',
    id: 'ibcSent',
    zoneWeightAccessor: 'ibcSentWeight',
    sortDescFirst: true,
    descr:
      'Transactions sent successfully from one zone to another zone (in order to be considered successful it has to be received by the other zone)',
  },
  {
    Header: 'IBC in',
    accessor: 'ibcReceived',
    id: 'ibcReceived',
    zoneWeightAccessor: 'ibcReceivedWeight',
    sortDescFirst: true,
    descr:
      'Successfully received transactions by a zone from another zone (completed data/token transfer)',
  },
  {
    Header: 'Channels',
    accessor: 'channels',
    id: 'channels',
    descr: '',
    disableSortBy: true,
  },
  {
    Header: 'IBC txs activity',
    Cell: TxsActivityCell,
    accessor: 'txsActivity',
    id: 'txsActivity',
    disableSortBy: true,
  },
];

export default columns;
