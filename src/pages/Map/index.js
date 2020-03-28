import React from 'react';

import Leaderboard from './components/Leaderboard';
import Graph from './components/Graph';
import { makeLeaderboard, makeGraph } from './makeData';

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
  const leaderboardData = React.useMemo(() => makeLeaderboard(2000), []);
  const graphData = React.useMemo(() => makeGraph(), []);

  return (
    <div>
      <Graph data={graphData} />
      <Leaderboard columns={columns} data={leaderboardData} />
    </div>
  );
}

export default Map;
