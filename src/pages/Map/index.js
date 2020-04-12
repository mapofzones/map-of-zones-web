import React, { useState } from 'react';

import Leaderboard from './components/Leaderboard';
import TxsActivityCell from './components/Leaderboard/cells/TxsActivity';
import Graph from './components/Graph';
import TotalStatTable from './components/TotalStatTable';
import { makeLeaderboard, makeGraph } from './makeData';
import { useZonesStat, useTotalStat } from './hooks';
import PeriodSwitcher, { PERIODS } from './components/PeriodSwitcher';

function Map() {
  const [period, setPeriod] = useState(PERIODS[0]);
  const zones = useZonesStat({
    variables: { period: period.hours, step: period.step },
  });
  const { loading, error, data } = useTotalStat({
    variables: { period: period.hours, step: period.step },
  });

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

  if (!data) {
    return null; // TODO: Add spinner
  }

  return (
    <div>
      <TotalStatTable
        period={period.name}
        ibcTxsActivity={data.ibcTxsActivity}
        ibcTxs={data.ibcTxs}
        allZones={data.allZones}
        activeZones={data.activeZones}
        allChannels={data.allChannels}
        activeChannels={data.activeChannels}
      />
      <Graph data={graphData} />
      <PeriodSwitcher hours={period.hours} onChange={setPeriod} />
      <Leaderboard columns={columns} data={leaderboardData} />
    </div>
  );
}

export default Map;
