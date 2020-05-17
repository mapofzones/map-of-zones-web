import React, { useCallback, useState } from 'react';

import { trackEvent } from 'common/helper';

import Leaderboard from './components/Leaderboard';
import TotalStatTable from './components/TotalStatTable';
import Footer from './components/Footer';
import GraphContainer from './components/GraphContainer';
import {
  useZonesStat,
  useTotalStat,
  usePeriodSelector,
  useFocusedZone,
} from './hooks';

function Map() {
  const [period, setPeriod] = usePeriodSelector();
  const [mapOpened, setIsMapOpened] = useState(false);
  const [sortedByColumn, setSort] = useState(undefined);
  const { data: zonesStat } = useZonesStat({
    variables: { period: period.hours, step: period.step },
  });
  const { data: totalStat } = useTotalStat({
    variables: { period: period.hours, step: period.step },
  });
  const [focusedZone, setFocusedZone] = useFocusedZone(
    zonesStat && zonesStat.nodes,
  );
  const [isTableOpened, setIsTableOpened] = useState('');

  const handleScroll = useCallback(
    table => {
      if (table) {
        if (table.getBoundingClientRect().top <= 20) {
          setIsTableOpened('fixed-thead');
        } else if (table.getBoundingClientRect().top <= 60) {
          setIsTableOpened('opened');
        } else {
          setIsTableOpened('');
        }
      }
    },
    [setIsTableOpened],
  );

  const toggleMapOpen = useCallback(
    event => {
      const isOpened = event === 'open';

      setIsMapOpened(isOpened);
      trackEvent({
        category: 'Map',
        action: 'full screen',
        label: isOpened ? 'on' : 'off',
      });
    },
    [setIsMapOpened],
  );

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
        focusedZone={focusedZone}
        toggleMapOpen={event => toggleMapOpen(event)}
        isTableOpened={isTableOpened}
        handleScroll={handleScroll}
      />
      <Leaderboard
        data={zonesStat.nodes}
        onSortChange={setSort}
        isTableOpened={isTableOpened}
        handleScroll={handleScroll}
        setFocusedZone={setFocusedZone}
        focusedZoneId={focusedZone?.id}
      />
      <Footer />
    </div>
  );
}

export default Map;
