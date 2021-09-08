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
  useShowTestnet,
} from './hooks';
import columns from './components/Leaderboard/config';

const ORDER_SORT = {
  true: 'desc',
  false: 'asc',
};

function Map() {
  useLocationTracker(); // TODO: Move to App component

  const [period, setPeriod] = usePeriodSelector();
  const [isMapFullscreen, toggleFullScreen] = useMapFullscreen();
  const [sort, setSort] = useSorting();
  const [isTestnetVisible, toggleShowTestnet] = useShowTestnet();

  const [isTableOpened, setIsTableOpened] = useState('');
  const [currentFilter, setFilter] = useFilters(undefined);

  const sortedByColumn = useMemo(
    () => columns.find(({ id }) => id === sort.tableOrderBy),
    [sort.tableOrderBy],
  );

  const initialState = useMemo(
    () => ({
      sortBy: [
        {
          id: sort.tableOrderBy,
          desc: ORDER_SORT[sort.tableOrderSort],
        },
      ],
    }),
    [sort.tableOrderBy, sort.tableOrderSort],
  );

  const filter = useMemo(
    () => ({ ...currentFilter, columnId: sort.tableOrderBy }),
    [currentFilter, sort.tableOrderBy],
  );
  const options = useMemo(
    () => ({
      variables: {
        period: period.hours,
      },
    }),
    [period.hours],
  );
  const zonesStat = useZonesStat(options, isTestnetVisible);
  const totalStat = useTotalStat(options, isTestnetVisible);
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
          isSortedDesc={ORDER_SORT[sort.tableOrderSort]}
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
          isTestnetVisible={isTestnetVisible}
          toggleShowTestnet={toggleShowTestnet}
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
