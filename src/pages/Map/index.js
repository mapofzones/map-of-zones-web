import React, { useCallback, useState, useMemo } from 'react';

import { trackEvent } from 'common/helper';
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
} from './hooks';

import { createGraph } from './hooks/zones-stat';

function getZonesForGraph(zonesStat, filter) {
  if (filter?.sortOrder && filter?.columnId && filter?.filterAmount) {
    const nodes = zonesStat.nodes
      .sort(
        (a, b) =>
          (filter.sortOrder === 'desc' ? b : a)[filter.columnId] -
          (filter.sortOrder === 'desc' ? a : b)[filter.columnId],
      )
      .slice(0, filter.filterAmount);

    const links = zonesStat.links
      .filter(
        ({ source, target }) =>
          nodes.includes(source) && nodes.includes(target),
      )
      .map(({ source, target }) => ({
        source,
        target,
      }));

    return {
      nodes,
      links,
      graph: createGraph(nodes, links),
    };
  }

  return zonesStat;
}

function Map() {
  useLocationTracker(); // TODO: Move to App component

  const [period, setPeriod] = usePeriodSelector();
  const [mapOpened, setIsMapOpened] = useState(false);
  const [sortedByColumn, setSort] = useState(undefined);
  const [isTableOpened, setIsTableOpened] = useState('');
  const [currentFilter, setFilter] = useState(undefined);
  const filter = useMemo(
    () => ({ ...currentFilter, columnId: sortedByColumn?.id }),
    [currentFilter, sortedByColumn],
  );
  const { data: zonesStat } = useZonesStat({
    variables: { period: period.hours, step: period.step },
  });
  const { data: totalStat } = useTotalStat({
    variables: { period: period.hours, step: period.step },
  });
  const [focusedZone, setFocusedZone] = useFocusedZone(
    zonesStat && zonesStat.nodes,
  );
  const filterFn = useCallback(
    rows =>
      filter?.sortOrder
        ? [...rows]
            .sort(
              (a, b) =>
                (filter.sortOrder === 'desc' ? b : a).values[filter.columnId] -
                (filter.sortOrder === 'desc' ? a : b).values[filter.columnId],
            )
            .slice(0, filter.filterAmount)
        : rows,
    [filter],
  );

  const zones = useMemo(() => getZonesForGraph(zonesStat, filter), [
    zonesStat,
    filter,
  ]);

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
          zonesStat={zones}
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
