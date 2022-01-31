import React from 'react';
import { FormattedNumber } from 'react-intl';

import { formatNumber, formatPercentage } from 'common/helper';

const columns = [
  {
    Header: 'Zone',
    accessor: 'name',
    id: 'name',
    disableSortBy: true,
    alwaysVisible: true,
  },
  {
    Header: 'Volume In',
    accessor: 'volumeIn',
    id: 'volume_in',
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
  },
  {
    Header: 'Volume Out',
    accessor: 'volumeOut',
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
  },
  {
    Header: 'IBC Success',
    accessor: 'ibcTxSuccess',
    id: 'ibc_tx_success',
    diffAccessor: 'ibcTxSuccessDiff',
    Cell: ({ value }) => formatNumber(value),
    sortDescFirst: true,
  },
  {
    Header: 'IBC Failed',
    accessor: 'ibcTxFailed',
    id: 'ibc_tx_failed',
    diffAccessor: 'ibcTxFailedDiff',
    Cell: ({ value }) => formatNumber(value),
    sortDescFirst: true,
  },
  {
    Header: 'Success rate',
    accessor: 'successRate',
    id: 'success_rate',
    diffAccessor: 'successRateDiff',
    Cell: ({ value }) => formatPercentage(value),
    sortDescFirst: true,
  },
];

export default columns;
