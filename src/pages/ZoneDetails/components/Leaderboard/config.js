import React from 'react';
import { FormattedNumber } from 'react-intl';
import classNames from 'classnames/bind';

import { formatNumber, formatPercentage } from 'common/helper';
import { ReactComponent as PendingIcon } from 'assets/images/pending.svg';
import { ReactComponent as ArrowUp } from './assets/arrow-up.svg';
import { ReactComponent as ArrowDown } from './assets/arrow-down.svg';

import styles from './index.module.css';

const cx = classNames.bind(styles);

const columns = [
  {
    Header: '',
    id: 'position',
    className: 'position',
    Cell: ({ row, state, rowsById }) => {
      if (row.depth === 0) {
        const Arrow = row.isExpanded ? ArrowUp : ArrowDown;
        return <Arrow className={cx('expandArrow')} />;
      }
      return getRowIndex(row, rowsById, state);
    },
    disableSortBy: true,
    alwaysVisible: true,
  },
  {
    Header: 'Zone',
    accessor: 'name',
    className: 'name',
    id: 'name',
    disableSortBy: true,
    alwaysVisible: true,
  },
  {
    Header: 'Volume In',
    accessor: 'volumeIn',
    id: 'volume_in',
    className: 'volumeIn',
    diffAccessor: 'volumeInDiff',
    pendingAccessor: 'volumeInPending',
    Cell: ({ value }) => (
      <FormattedNumber
        value={value}
        style="currency"
        currency="USD"
        maximumFractionDigits="0"
      />
    ),
    sortDescFirst: true,
    tooltip:
      'USD value of tokens successfully received from a particular peer with pertinent volume in progress',
  },
  {
    Header: 'Volume Out',
    accessor: 'volumeOut',
    className: 'volumeOut',
    id: 'volume_out',
    diffAccessor: 'volumeOutDiff',
    pendingAccessor: 'volumeOutPending',
    Cell: ({ value }) => (
      <FormattedNumber
        value={value}
        style="currency"
        currency="USD"
        maximumFractionDigits="0"
      />
    ),
    sortDescFirst: true,
    tooltip:
      'USD value of tokens transferred outwards to a particular peer with pertinent volume in progress',
  },
  {
    Header: 'IBC Success',
    accessor: 'ibcTxSuccess',
    className: 'ibcTxSuccess',
    id: 'ibc_tx_success',
    diffAccessor: 'ibcTxSuccessDiff',
    Cell: ({ value }) => formatNumber(value),
    sortDescFirst: true,
    sortType: (rowA, rowB, id, desc) =>
      multipleSorting(rowA, rowB, [id, 'ibc_tx_pending']),
    tooltip: `Number of transfers successfully 'transferred to' and 'received from' a particular peer`,
  },
  {
    Header: 'IBC Pending',
    accessor: 'ibcTxPending',
    className: 'ibcTxPending',
    id: 'ibc_tx_pending',
    Cell: ({ value }) => (
      <>
        <PendingIcon className={cx('pendingIcon')} />
        {formatNumber(value)}
      </>
    ),
    sortDescFirst: true,
    tooltip: 'Balancing figure between inbound and outbound IBC transfers',
  },
  {
    Header: 'IBC Failed',
    accessor: 'ibcTxFailed',
    className: 'ibcTxFailed',
    id: 'ibc_tx_failed',
    diffAccessor: 'ibcTxFailedDiff',
    Cell: ({ value }) => formatNumber(value),
    sortDescFirst: true,
    sortType: (rowA, rowB, id, desc) =>
      multipleSorting(rowA, rowB, [id, 'ibc_tx_pending']),
    tooltip:
      'Number of IBC transfers failed attributed to a particular pair of channels between Zones',
  },
  {
    Header: 'Success rate',
    accessor: 'successRate',
    className: 'successRate',
    id: 'success_rate',
    diffAccessor: 'successRateDiff',
    Cell: ({ value }) => formatPercentage(value),
    sortDescFirst: true,
  },
];

function getRowIndex(row, rowsById, state) {
  const parentIndex = row.id.split('.')[0];
  const parentRow = rowsById[parentIndex];
  const index = parentRow.subRows.indexOf(row);
  const sortBy = state?.sortBy?.[0];
  return !sortBy || sortBy.desc ? index + 1 : parentRow.subRows.length - index;
}

function multipleSorting(row1, row2, sortedColumnIds) {
  for (let i = 0; i < sortedColumnIds.length; i++) {
    const columnId = sortedColumnIds[i];
    if (row1.values[columnId] > row2.values[columnId]) return 1;
    if (row2.values[columnId] > row1.values[columnId]) return -1;
  }
  return 0;
}

export default columns;
