import TxsActivityCell from './cells/TxsActivity';

const columns = [
  {
    Header: '#',
    id: 'position',
    accessor: (originalRow, rowIndex) => rowIndex,
  },
  {
    Header: 'Zone',
    accessor: 'name',
  },
  {
    Header: 'Total IBC Txs',
    accessor: 'totalTxs',
    descr:
      'A financial transaction is an agreement, or communication, carried out between a buyer and a seller to exchange an asset for payment.',
  },
  {
    Header: 'Total Txs',
    accessor: 'totalIbcTxs',
    descr:
      'A financial transaction is an agreement, or communication, carried out between a buyer and a seller to exchange an asset for payment.',
  },
  {
    Header: 'IBC share %',
    accessor: 'ibcPercentage',
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
  },
  {
    Header: 'IBC txs activity',
    Cell: TxsActivityCell,
    accessor: 'txsActivity',
  },
];

export default columns;
