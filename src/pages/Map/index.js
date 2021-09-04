import React, { useCallback, useState, useMemo } from 'react';

import { useLocationTracker } from 'common/hooks';

import Leaderboard from './components/Leaderboard';
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
  useMapFullscreen,
  useFilters,
  useSorting,
} from './hooks';
import columns from './components/Leaderboard/config';

const SORT_ORDER = {
  true: 'desc',
  false: 'asc',
};

function Map() {
  useLocationTracker(); // TODO: Move to App component

  const [period, setPeriod] = usePeriodSelector();
  const [isMapFullscreen, toggleFullScreen] = useMapFullscreen();

  const [sort, setSort] = useSorting();
  const [isTableOpened, setIsTableOpened] = useState('');
  const [currentFilter, setFilter] = useFilters(undefined);

  const sortedByColumn = useMemo(
    () => columns.find(({ id }) => id === sort.orderBy),
    [sort.orderBy],
  );

  const initialState = useMemo(
    () => ({
      sortBy: [
        {
          id: sort.orderBy,
          desc: SORT_ORDER[sort.sortOrder],
        },
      ],
    }),
    [sort.orderBy, sort.sortOrder],
  );

  const filter = useMemo(() => ({ ...currentFilter, columnId: sort.orderBy }), [
    currentFilter,
    sort.orderBy,
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

  const zonesStatFiltered = useZonesStatFiltered(
    zonesStat,
    filter,
    focusedZone,
  );

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

  if (!totalStat || !zonesStatFiltered) {
    return <Loader />;
  } else {
    return (
      <div>
        {!isMapFullscreen && (
          <TotalStatTable
            activeChannels={totalStat.activeChannels}
            activeZones={totalStat.activeZones}
            allChannels={totalStat.allChannels}
            allZones={totalStat.allZones}
            ibcTxs={totalStat.ibcTxs}
            ibcTxsActivity={totalStat.ibcTxsActivity}
            mostActiveZonesPair={totalStat.mostActiveZonesPair}
            period={period.name}
          />
        )}
        <GraphContainer
          currentFilter={currentFilter}
          focusedZone={focusedZone}
          handleScroll={handleScroll}
          isSortedDesc={SORT_ORDER[sort.sortOrder]}
          isTableOpened={isTableOpened}
          mapOpened={isMapFullscreen}
          period={period}
          setFilter={setFilter}
          setFocusedZone={preSetFocusedZone}
          setPeriod={setPeriod}
          sortBy={sortedByColumn?.Header}
          toggleMapOpen={toggleFullScreen}
          zonesStat={zonesStatFiltered}
          zoneWeightAccessor={sortedByColumn?.zoneWeightAccessor}
        />
        <Leaderboard
          data={zonesStatFiltered.nodes}
          focusedZoneId={focusedZone?.id}
          handleScroll={handleScroll}
          isTableOpened={isTableOpened}
          onSortChange={setSort}
          period={period}
          setFocusedZone={preSetFocusedZone}
          initialState={initialState}
        />
        <Footer />
      </div>
    );
  }
}

export default Map;
