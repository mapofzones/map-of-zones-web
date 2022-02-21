import React, { useCallback, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { parse, stringify } from 'querystringify';

import Leaderboard from './components/Leaderboard';
// TODO: What is purpose to use two same footers and headers? I Just change this for remove code duplication, but could be return
import Footer from 'pages/Map/components/Footer';
import Header from './components/Header';
import Loader from './components/Loader';
import ChannelDetails from './components/ChannelDetails';
import { usePeriodSelector } from '../Map/hooks';

import { useShowTestnet, useChannelGroupStat, useSorting } from './hooks';

function Channel() {
  const location = useLocation();
  const history = useHistory();
  const [period, setPeriod] = usePeriodSelector();
  const [isTestnetVisible, toggleShowTestnet] = useShowTestnet();
  const [selectedChannel, selectChannel] = useState(null);

  const source = useMemo(() => {
    return parse(location.search).source;
  }, [location.search]);

  const options = useMemo(() => {
    return {
      variables: {
        source,
        period: period.hours,
      },
    };
  }, [source, period.hours]);

  const [sort, setSort] = useSorting();
  const initialState = useMemo(
    () => ({
      sortBy: [
        {
          id: sort.tableOrderBy,
          desc: sort.tableOrderSort !== 'asc',
        },
      ],
    }),
    [sort.tableOrderBy, sort.tableOrderSort],
  );

  const { channelGroup, sourceZone } = useChannelGroupStat(
    options,
    isTestnetVisible,
  );

  const navigateToMainPage = useCallback(() => {
    history.push('/');
  }, [history]);

  const onCloseClick = useCallback(() => {
    if (location.state?.navigateFrom) {
      const search = parse(location.state.navigateFrom.search);

      if (isTestnetVisible) {
        search.testnet = true;
      } else {
        search.testnet = false;
      }

      history.push(
        `${location.state.navigateFrom.pathname}?${stringify(search)}`,
      );
    } else {
      const search = {};

      if (isTestnetVisible) {
        search.testnet = true;
      }

      history.replace(`/?${stringify(search)}`);
    }
  }, [history, isTestnetVisible, location.state]);

  if (!sourceZone) {
    return <Loader />;
  } else {
    return (
      <div>
        <Header
          navigateToMainPage={navigateToMainPage}
          onCloseClick={onCloseClick}
          source={sourceZone}
          isTestnetVisible={isTestnetVisible}
          toggleShowTestnet={toggleShowTestnet}
          period={period}
          setPeriod={setPeriod}
        />
        <Leaderboard
          data={channelGroup}
          onChannelClick={selectChannel}
          initialState={initialState}
          onSortChange={setSort}
        />
        <Footer />
        <ChannelDetails
          onRequestClose={() => selectChannel(null)}
          isOpen={!!selectedChannel}
          channel={selectedChannel}
        />
      </div>
    );
  }
}

export default Channel;
