import React, { useCallback, useState, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router';
import { parse } from 'querystringify';

import { removeDuplicatedZoneCounerparties } from 'common/helper';

import Leaderboard from './components/Leaderboard';
import leaderboardColumnsConfig from './components/Leaderboard/config';
import Footer from './components/Footer';
import Header from './components/Header';
import Loader from './components/Loader';
import ZoneDetails from './components/ZoneDetails';
import ZonesPicker from './components/ZonesPicker';

import { useZoneStat } from './hooks';

const SORT_BY_PERIOD = {
  24: 'ibc_tx_1d',
  168: 'ibc_tx_7d',
  720: 'ibc_tx_30d',
};

function Channel() {
  const location = useLocation();
  const history = useHistory();

  const { source, targets, period } = useMemo(() => {
    const { source, targets, period } = parse(location.search);

    return {
      source,
      targets: (targets || '').split(',').filter(Boolean),
      period,
    };
  }, [location.search]);

  const options = useMemo(
    () => ({
      variables: { source },
      additionalData: { targets },
    }),
    [source, targets],
  );

  const initialState = useMemo(
    () => ({
      sortBy: [
        {
          id: SORT_BY_PERIOD[period],
          desc: true,
        },
      ],
    }),
    [period],
  );

  const [sortedByColumn, setSort] = useState(undefined);
  const [currentFilter] = useState(undefined);

  const [showZonesPicker, setShowZonesPicker] = useState(false);
  const [showZoneDetails, setShowZoneDetails] = useState(false);
  const [zoneDetails, setZoneDetails] = useState(null);

  const columnId = useMemo(() => sortedByColumn?.id, [sortedByColumn]);

  const filter = useMemo(() => ({ ...currentFilter, columnId }), [
    currentFilter,
    columnId,
  ]);

  const zoneStat = useZoneStat(options);

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

  const toggleZonesPicker = useCallback(
    () => setShowZonesPicker(!showZonesPicker),
    [setShowZonesPicker, showZonesPicker],
  );

  const toggleZoneDetails = useCallback(
    () => setShowZoneDetails(!showZoneDetails),
    [setShowZoneDetails, showZoneDetails],
  );

  const preSetFocusedZone = useCallback(
    zone => {
      if (zone) {
        setZoneDetails(zone);
        toggleZoneDetails();
      }
    },
    [toggleZoneDetails],
  );

  const selectZones = useCallback(
    newTargets => {
      if (
        newTargets.length ===
        removeDuplicatedZoneCounerparties(zoneStat.nodes).length
      ) {
        history.push(`/zone?source=${source}`, location.state);
      } else {
        history.push(
          `/zone?source=${source}&targets=${newTargets.join(',')}`,
          location.state,
        );
      }
    },
    [history, location.state, source, zoneStat],
  );

  const navigateToMainPage = useCallback(() => {
    history.push('/');
  }, [history]);

  const onCloseClick = useCallback(() => {
    if (location.state?.navigateFrom) {
      history.push(location.state.navigateFrom);
    } else {
      history.replace('/');
    }
  }, [history, location.state]);

  if (!zoneStat) {
    return <Loader />;
  } else {
    return (
      <div>
        <Header
          navigateToMainPage={navigateToMainPage}
          onCloseClick={onCloseClick}
          source={source}
          toggleZonesPicker={toggleZonesPicker}
          zoneStat={zoneStat}
        />
        <Leaderboard
          filter={filterFn}
          data={zoneStat.selectedNodes}
          onSortChange={setSort}
          setFocusedZone={preSetFocusedZone}
          initialState={initialState}
        />
        <ZoneDetails
          onRequestClose={toggleZoneDetails}
          isOpen={showZoneDetails}
          zone={zoneDetails}
        />
        <ZonesPicker
          onRequestClose={toggleZonesPicker}
          isOpen={showZonesPicker}
          zoneStat={zoneStat}
          selectZones={selectZones}
        />
        <Footer />
      </div>
    );
  }
}

export default Channel;
