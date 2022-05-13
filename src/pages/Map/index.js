import React, { useCallback, useState, useMemo, useEffect } from 'react';

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

  useEffect(() => {
    const el = document.getElementById('page-container');
    if (el && el.scrollTop > 500) {
      el.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [focusedZone]);

  const handleScroll = useCallback(
    table => {
      if (table) {
        console.log(table.getBoundingClientRect().top);
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

  useEffect(() => {
    let table = document.getElementById('page-container');
    window.addEventListener('scroll', () => handleScroll(table));

    return window.removeEventListener('scroll', () => handleScroll(table));
  }, []);

  if (!totalStat || !zonesStatFiltered) {
    return <Loader />;
  } else {
    return (
      // <div >
      <div id="page-container" style={{ overflowX: 'auto', height: '100vh' }}>
        <>
          {!isMapFullscreen && (
            <TotalStatTable
              showIbcVolumeChart
              activeChannels={totalStat.activeChannels}
              activeZones={totalStat.activeZones}
              allChannels={totalStat.allChannels}
              allZones={totalStat.allZones}
              ibcTxs={totalStat.ibcTxs}
              ibcVolume={totalStat.ibcVolume}
              ibcTxsChart={totalStat.ibcTxsChart}
              ibcVolumeChart={totalStat.ibcVolumeChart}
              ibcVolumePending={totalStat.ibcVolumePending}
              ibcTxsPending={totalStat.ibcTxsPending}
              ibcTxsFailed={totalStat.ibcTxsFailed}
              mostActiveByTxsZonesPair={totalStat.mostActiveByTxsZonesPair}
              mostActiveByVolumeZonesPair={
                totalStat.mostActiveByVolumeZonesPair
              }
              ibcVolumeDiff={totalStat.ibcVolumeDiff}
              ibcTxsDiff={totalStat.ibcTxsDiff}
              period={period.name}
            />
          )}
          <GraphContainer
            currentFilter={currentFilter}
            focusedZone={focusedZone}
            isSortedDesc={sort}
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
            isTableOpened={isTableOpened}
            onSortChange={setSort}
            period={period}
            setFocusedZone={preSetFocusedZone}
            initialState={initialState}
          />
          <Footer />
        </>
      </div>
    );
  }
}

export default Map;
