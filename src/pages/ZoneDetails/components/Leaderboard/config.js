import { formatNumber } from 'common/helper';

const columns = [
  {
    Header: '№',
    id: 'position',
    accessor: (originalRow, rowIndex) => rowIndex,
    Cell: ({ row, rows }) => [...rows].indexOf(row) + 1,
    disableSortBy: true,
    alwaysVisible: true,
  },
  {
    Header: 'Channel',
    accessor: 'name',
    id: 'name',
    disableSortBy: true,
    alwaysVisible: true,
  },
  {
    Header: 'Recipient Zone',
    accessor: 'zone_counerparty',
    id: 'zone_counerparty',
    disableSortBy: true,
    alwaysVisible: true,
  },
  {
    Header: 'IBC Failed',
    accessor: 'ibc_tx_1d_failed',
    id: 'ibc_tx_1d_failed',
    diffAccessor: 'ibc_tx_1d_diff',
    Cell: ({ cell }) => formatNumber(cell.value),
    sortDescFirst: true,
  },
  {
    Header: 'IBC Success',
    accessor: 'ibc_tx_1d',
    id: 'ibc_tx_1d',
    diffAccessor: 'ibc_tx_1d_diff',
    Cell: ({ cell }) => formatNumber(cell.value),
    sortDescFirst: true,
  },
  {
    Header: 'IBC Failed',
    accessor: 'ibc_tx_7d_failed',
    id: 'ibc_tx_7d_failed',
    diffAccessor: 'ibc_tx_7d_diff',
    Cell: ({ cell }) => formatNumber(cell.value),
    sortDescFirst: true,
  },
  {
    Header: 'IBC Success',
    accessor: 'ibc_tx_7d',
    id: 'ibc_tx_7d',
    diffAccessor: 'ibc_tx_7d_diff',
    Cell: ({ cell }) => formatNumber(cell.value),
    sortDescFirst: true,
  },
  {
    Header: 'IBC Failed',
    accessor: 'ibc_tx_30d_failed',
    id: 'ibc_tx_30d_failed',
    diffAccessor: 'ibc_tx_30d_diff',
    Cell: ({ cell }) => formatNumber(cell.value),
    sortDescFirst: true,
  },
  {
    Header: 'IBC Success',
    accessor: 'ibc_tx_30d',
    id: 'ibc_tx_30d',
    diffAccessor: 'ibc_tx_30d_diff',
    Cell: ({ cell }) => formatNumber(cell.value),
    sortDescFirst: true,
  },
];

export default columns;
