import React from 'react';

import Leaderboard from './components/Leaderboard';
import makeData from './makeData';

function Map() {
  const columns = React.useMemo(
    () => [
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
        Header: 'Overall txs',
        accessor: 'totalTxs',
      },
      {
        Header: 'IBC all',
        accessor: 'ibcAll',
      },
      {
        Header: '% IBC',
        accessor: 'ibcPercentage',
      },
      {
        Header: 'IBC sent',
        accessor: 'ibcSent',
      },
      {
        Header: 'IBC received',
        accessor: 'ibcReceived',
      },
      {
        Header: 'Connects',
        accessor: 'connections',
      },
      {
        Header: 'Txs activity',
      },
    ],
    [],
  );
  const data = React.useMemo(() => makeData(2000), []);

  return <Leaderboard columns={columns} data={data} />;
}

export default Map;
