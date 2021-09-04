import React, { useCallback, useState, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router';
import { parse, stringify } from 'querystringify';

import { removeDuplicatedZoneCounerparties } from 'common/helper';

import Leaderboard from './components/Leaderboard';
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

const PERIOD_BY_ID = {
  ibc_tx_1d: 24,
  ibc_tx_1d_failed: 24,
  ibc_tx_7d: 168,
  ibc_tx_7d_failed: 168,
  ibc_tx_30d: 720,
  ibc_tx_30d_failed: 720,
};

const SORT_ORDER = {
  true: 'desc',
  false: 'asc',
};

const getSortBy = (period, orderBy) => {
  return SORT_BY_PERIOD[period] + (orderBy === 'success' ? '' : '_failed');
};

const getOrderBy = columnId => {
  return columnId.includes('failed') ? 'failed' : 'success';
};

function Channel() {
  const location = useLocation();
  const history = useHistory();

  const { source, targets, period, orderBy, sortOrder } = useMemo(() => {
    const {
      source,
      targets,
      period,
      orderBy = 'success',
      sortOrder = 'desc',
    } = parse(location.search);

    return {
      source,
      targets: (targets || '').split(',').filter(Boolean),
      period,
      orderBy,
      sortOrder,
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
          id: getSortBy(period, orderBy),
          desc: sortOrder === 'desc',
        },
      ],
    }),
    [orderBy, period, sortOrder],
  );

  const [showZonesPicker, setShowZonesPicker] = useState(false);
  const [showZoneDetails, setShowZoneDetails] = useState(false);
  const [zoneDetails, setZoneDetails] = useState(null);

  const zoneStat = useZoneStat(options);

  const onSortChange = useCallback(
    sort => {
      const search = parse(location.search);

      search.period = PERIOD_BY_ID[sort.id];
      search.orderBy = getOrderBy(sort.id);
      search.sortOrder = SORT_ORDER[sort.isSortedDesc];
      search.source = source;

      history.push(`/zone?${stringify(search)}`, location.state);
    },
    [history, location.search, location.state, source],
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
        newTargets.length !==
        removeDuplicatedZoneCounerparties(zoneStat.nodes).length
      ) {
        const search = parse(location.search);

        search.targets = newTargets.join(',');

        history.push(`/zone?${stringify(search)}`, location.state);
      }
    },
    [history, location.search, location.state, zoneStat],
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
          data={zoneStat.selectedNodes}
          onSortChange={onSortChange}
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
