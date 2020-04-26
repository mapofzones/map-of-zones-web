import React, { useState } from 'react';

import Leaderboard from './components/Leaderboard';
import TotalStatTable from './components/TotalStatTable';
import Footer from './components/Footer';
import GraphContainer from './components/GraphContainer';
import { PERIODS } from './components/PeriodSwitcher';
import { useZonesStat, useTotalStat } from './hooks';

function Map() {
  const [isTableOpened, setIsTableOpened] = useState(false);
  const [period, setPeriod] = useState(PERIODS[0]);
  const { data: zonesStat } = useZonesStat({
    variables: { period: period.hours, step: period.step },
  });
  const { loading, error, data: totalStat } = useTotalStat({
    variables: { period: period.hours, step: period.step },
  });

  const toggleTableOpen = event => {
    setIsTableOpened(event === 'open');
  };

  if (!totalStat || !zonesStat) {
    return null; // TODO: Add spinner
  }

  return (
    <div>
      <TotalStatTable
        period={period.name}
        ibcTxsActivity={totalStat.ibcTxsActivity}
        ibcTxs={totalStat.ibcTxs}
        allZones={totalStat.allZones}
        activeZones={totalStat.activeZones}
        allChannels={totalStat.allChannels}
        activeChannels={totalStat.activeChannels}
        mostActiveZonesPair={totalStat.mostActiveZonesPair}
        isTableOpened={isTableOpened}
      />
      <GraphContainer
        period={period}
        zonesStat={zonesStat}
        isTableOpened={isTableOpened}
        toggleTableOpen={toggleTableOpen}
        setPeriod={setPeriod}
      />
      <Leaderboard
        data={zonesStat.nodes}
        toggleTableOpen={event => toggleTableOpen(event)}
      />
      <Footer />
    </div>
  );
}

export default Map;
