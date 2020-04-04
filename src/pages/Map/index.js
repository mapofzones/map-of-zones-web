import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import Leaderboard from './components/Leaderboard';
import TxsActivityCell from './components/Leaderboard/cells/TxsActivity';
import Graph from './components/Graph';
import TotalStatTable from './components/TotalStatTable';
import { makeLeaderboard, makeGraph } from './makeData';

const TOTAL_STATS = gql`
  {
    get_total_stats(args: { period_in_hours: 400, step_in_hours: 100 }) {
      zones_cnt_period
      zones_cnt_all
      top_zone_pair
      channels_cnt_period
      channels_cnt_all
      chart
    }
  }
`;

function Map() {
  const { loading, error, data } = useQuery(TOTAL_STATS);

  console.log(data);

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
        Cell: TxsActivityCell,
        accessor: 'txsActivity',
      },
    ],
    [],
  );
  const leaderboardData = React.useMemo(() => makeLeaderboard(2000), []);
  const graphData = React.useMemo(() => makeGraph(), []);

  if (loading) {
    return null; // TODO: Add spinner
  }

  const ibcTxsActivity = data?.get_total_stats[0].chart;

  return (
    <div>
      <TotalStatTable
        ibcTxsActivity={ibcTxsActivity}
        period="24h"
        ibcTxs="36 876"
        zones="223"
        channels="578"
      />
      <Graph data={graphData} />
      <Leaderboard columns={columns} data={leaderboardData} />
    </div>
  );
}

export default Map;
