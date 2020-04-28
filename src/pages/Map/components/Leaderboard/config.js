import { roundNumber } from 'common/helper';

import TxsActivityCell from './cells/TxsActivity';

const columns = [
  {
    Header: '#',
    id: 'position',
    accessor: (originalRow, rowIndex) => rowIndex + 1,
    disableSortBy: true,
  },
  {
    Header: 'Zone',
    accessor: 'name',
    disableSortBy: true,
  },
  {
    Header: 'Total IBC Txs',
    accessor: 'totalIbcTxs',
    zoneWeightAccessor: 'ibcTxsWeight',
    descr:
      'A financial transaction is an agreement, or communication, carried out between a buyer and a seller to exchange an asset for payment.',
  },
  {
    Header: 'Total Txs',
    accessor: 'totalTxs',
    descr:
      'A financial transaction is an agreement, or communication, carried out between a buyer and a seller to exchange an asset for payment.',
  },
  {
    Header: 'IBC share %',
    accessor: 'ibcPercentage',
    Cell: ({ cell }) => roundNumber(cell.value, 2),
    disableSortBy: true,
  },
  {
    Header: 'IBC sent',
    accessor: 'ibcSent',
    descr:
      'A financial transaction is an agreement, or communication, carried out between a buyer and a seller to exchange an asset for payment.',
  },
  {
    Header: 'IBC received',
    accessor: 'ibcReceived',
    descr:
      'A financial transaction is an agreement, or communication, carried out between a buyer and a seller to exchange an asset for payment.',
  },
  {
    Header: 'Channels',
    accessor: 'channels',
    descr:
      'A financial transaction is an agreement, or communication, carried out between a buyer and a seller to exchange an asset for payment.',
    disableSortBy: true,
  },
  {
    Header: 'IBC txs activity',
    Cell: TxsActivityCell,
    accessor: 'txsActivity',
    disableSortBy: true,
  },
];

export default columns;
