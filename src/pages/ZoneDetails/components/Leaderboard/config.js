import React from 'react';
import { FormattedNumber } from 'react-intl';

import { formatNumber } from 'common/helper';

const columns = [
  {
    Header: 'Zone',
    accessor: 'counterpartyName',
    id: 'zone_counerparty',
    disableSortBy: true,
    alwaysVisible: true,
  },
  {
    Header: 'Volume In',
    accessor: 'volumeIn',
    id: 'volume_in',
    diffAccessor: 'volumeInDiff',
    Cell: ({ cell }) => (
      <FormattedNumber
        value={cell.value}
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
    Cell: ({ cell }) => (
      <FormattedNumber
        value={cell.value}
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
    Cell: ({ cell }) => formatNumber(cell.value),
    sortDescFirst: true,
  },
  {
    Header: 'IBC Failed',
    accessor: 'ibcTxFailed',
    id: 'ibc_tx_failed',
    diffAccessor: 'ibcTxFailedDiff',
    Cell: ({ cell }) => formatNumber(cell.value),
    sortDescFirst: true,
  },
];

export default columns;
