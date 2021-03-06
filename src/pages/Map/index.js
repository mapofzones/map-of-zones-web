import React, { useCallback, useState, useMemo } from 'react';

import { trackEvent } from 'common/helper';
import { useLocationTracker } from 'common/hooks';

import Leaderboard from './components/Leaderboard';
import leaderboardColumnsConfig from './components/Leaderboard/config';
import TotalStatTable from './components/TotalStatTable';
import Footer from './components/Footer';
import GraphContainer from './components/GraphContainer';
import Loader from './components/Loader';
import {
  useZonesStat,
  useTotalStat,
  usePeriodSelector,
  useFocusedZone,
  useZonesStatFiltered,
} from './hooks';

function Map() {
  useLocationTracker(); // TODO: Move to App component

  const [period, setPeriod] = usePeriodSelector();
  const [mapOpened, setIsMapOpened] = useState(false);
  const [sortedByColumn, setSort] = useState(undefined);
  const [isTableOpened, setIsTableOpened] = useState('');
  const [currentFilter, setFilter] = useState(undefined);
  const columnId = sortedByColumn?.id;
  const filter = useMemo(() => ({ ...currentFilter, columnId }), [
    currentFilter,
    columnId,
  ]);
  const options = useMemo(
    () => ({
      variables: { period: period.hours },
    }),
    [period],
  );
  const zonesStat = useZonesStat(options);
  const totalStat = useTotalStat(options);
  const [focusedZone, setFocusedZone] = useFocusedZone(
    zonesStat && zonesStat.nodes,
  );
  const filterFn = useCallback(
    rows => {
      let result = rows;

      if (filter?.sortOrder && filter.filterAmount) {
        result = [...result]
          .sort(
            (a, b) =>
              (filter.sortOrder === 'desc' ? b : a).values[filter.columnId] -
              (filter.sortOrder === 'desc' ? a : b).values[filter.columnId],
          )
          .slice(0, filter.filterAmount);
      }

      if (filter?.trendLine) {
        const column = leaderboardColumnsConfig.find(
          ({ id }) => id === filter.columnId,
        );

        if (column?.diffAccessor) {
          result = result.filter(row => {
            const value = row.values[column.diffAccessor];

            return filter.trendLine === 'asc' ? value > 0 : value < 0;
          });
        }
      }

      return result;
    },
    [filter],
  );

  const zonesStatFiltered = useZonesStatFiltered(zonesStat, filter);

  const preSetFocusedZone = useCallback(
    zone => {
      if (!zone || !focusedZone || zone.id !== focusedZone.id) {
        setFocusedZone(zone);
      } else {
        setFocusedZone(null);
      }
    },
    [focusedZone, setFocusedZone],
  );
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
    return <Loader />;
  } else {
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
          zonesStat={zonesStatFiltered}
          setPeriod={setPeriod}
          sortBy={sortedByColumn?.Header}
          isSortedDesc={sortedByColumn?.isSortedDesc}
          zoneWeightAccessor={sortedByColumn?.zoneWeightAccessor}
          mapOpened={mapOpened}
          setFocusedZone={preSetFocusedZone}
          focusedZone={focusedZone}
          toggleMapOpen={event => toggleMapOpen(event)}
          isTableOpened={isTableOpened}
          handleScroll={handleScroll}
          setFilter={setFilter}
          currentFilter={currentFilter}
        />
        <Leaderboard
          filter={filterFn}
          period={period}
          data={zonesStat.nodes}
          onSortChange={setSort}
          isTableOpened={isTableOpened}
          handleScroll={handleScroll}
          setFocusedZone={preSetFocusedZone}
          focusedZoneId={focusedZone?.id}
        />
        <Footer />
      </div>
    );
  }
}

export default Map;
