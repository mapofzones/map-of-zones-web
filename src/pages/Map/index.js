import React, { useState } from 'react';

import Leaderboard from './components/Leaderboard';
import TotalStatTable from './components/TotalStatTable';
import Footer from './components/Footer';
import GraphContainer from './components/GraphContainer';
import { PERIODS } from './components/PeriodSwitcher';
import { useZonesStat, useTotalStat } from './hooks';

function Map() {
  const [mapOpened, setIsMapOpened] = useState(false);
  const [period, setPeriod] = useState(PERIODS[0]);
  const [sortedByColumn, setSort] = useState(undefined);
  const [focusedZone, setFocusedZone] = useState(undefined);
  const { data: zonesStat } = useZonesStat({
    variables: { period: period.hours, step: period.step },
  });
  const { loading, error, data: totalStat } = useTotalStat({
    variables: { period: period.hours, step: period.step },
  });

  const toggleMapOpen = event => {
    setIsMapOpened(event === 'open');
  };

  if (!totalStat || !zonesStat) {
    return null; // TODO: Add spinner
  }

  return (
    <div>
      {!mapOpened && (
        <TotalStatTable
          period={period.name}
          ibcTxsActivity={totalStat.ibcTxsActivity}
          ibcTxs={totalStat.ibcTxs}
          allZones={totalStat.allZones}
          activeZones={totalStat.activeZones}
          allChannels={totalStat.allChannels}
          activeChannels={totalStat.activeChannels}
          mostActiveZonesPair={totalStat.mostActiveZonesPair}
        />
      )}
      <GraphContainer
        period={period}
        zonesStat={zonesStat}
        setPeriod={setPeriod}
        sortBy={sortedByColumn?.Header}
        isSortedDesc={sortedByColumn?.isSortedDesc}
        zoneWeightAccessor={sortedByColumn?.zoneWeightAccessor}
        mapOpened={mapOpened}
        setFocusedZone={setFocusedZone}
        focusedZoneName={focusedZone?.name}
        toggleMapOpen={event => toggleMapOpen(event)}
      />
      {!mapOpened && (
        <Leaderboard data={zonesStat.nodes} onSortChange={setSort} />
      )}
      <Footer />
    </div>
  );
}

export default Map;
