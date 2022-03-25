import React from 'react';
import { FormattedNumber } from 'react-intl';
import { formatNumber } from 'common/helper';

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
    accessor: 'ibcVolumeRating', // TODO: it seems it's better to use 'ibcVolume' here
    id: 'ibcVolume',
    diffAccessor: 'ibcVolumeDiff',
    pendingAccessor: 'ibcVolumePending',
    ratingAccessor: 'ibcVolumeRatingDiff',
    Cell: ({ itemValue }) => (
      <FormattedNumber
        value={itemValue}
        style="currency"
        currency="USD"
        maximumFractionDigits="0"
      />
    ),
    zoneWeightAccessor: 'ibcVolumeWeight',
    tooltip:
      'USD value of tokens successfully relayed via IBC transfer with pertinent volume in progress',
  },
  {
    Header: 'IBC transfers',
    accessor: 'ibcTransfersRating',
    id: 'ibcTransfers',
    diffAccessor: 'ibcTransfersDiff',
    pendingAccessor: 'ibcTransfersPending',
    ratingAccessor: 'ibcTransfersRatingDiff',
    Cell: ({ itemValue }) => formatNumber(itemValue),
    zoneWeightAccessor: 'ibcTransfersWeight',
    tooltip:
      'Number of successfully relayed IBC transfers with pertinent quantity in progress',
  },
  {
    Header: 'IBC volume out, $',
    accessor: 'ibcVolumeSentRating',
    id: 'ibcVolumeSent',
    diffAccessor: 'ibcVolumeSentDiff',
    pendingAccessor: 'ibcVolumeSentPending',
    ratingAccessor: 'ibcVolumeSentRatingDiff',
    Cell: ({ itemValue }) => (
      <FormattedNumber
        value={itemValue}
        style="currency"
        currency="USD"
        maximumFractionDigits="0"
      />
    ),
    zoneWeightAccessor: 'ibcVolumeSentWeight',
    tooltip:
      'USD value of tokens successfully transferred to other Zones with pertinent volume in progress',
  },
  {
    Header: 'IBC volume in, $',
    accessor: 'ibcVolumeReceivedRating',
    id: 'ibcVolumeReceived',
    diffAccessor: 'ibcVolumeReceivedDiff',
    pendingAccessor: 'ibcVolumeReceivedPending',
    ratingAccessor: 'ibcVolumeReceivedRatingDiff',
    Cell: ({ itemValue }) => (
      <FormattedNumber
        value={itemValue}
        style="currency"
        currency="USD"
        maximumFractionDigits="0"
      />
    ),
    zoneWeightAccessor: 'ibcVolumeReceivedWeight',
    tooltip:
      'USD value of tokens successfully received from other Zones with pertinent volume in progress',
  },
  {
    Header: 'Active Addresses',
    accessor: 'ibcActiveAddressesRating',
    id: 'ibcActiveAddresses',
    diffAccessor: 'ibcActiveAddressesDiff',
    ratingAccessor: 'ibcActiveAddressesRatingDiff',
    Cell: ({ itemValue }) =>
      itemValue === null ? '-' : formatNumber(itemValue),
    tooltip:
      'Number of Zone’s unique addresses initiated outward IBC transfer(s)',
    dependOnPeriod: true,
    zoneWeightAccessor: 'ibcActiveAddressesWeight',
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
