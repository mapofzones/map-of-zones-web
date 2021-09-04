import { useCallback, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { parse, stringify } from 'querystringify';

import { trackEvent } from 'common/helper';

export const useShowTestnet = () => {
  const history = useHistory();
  const location = useLocation();

  const toggleShowTestnet = useCallback(() => {
    const search = parse(location.search);

    if (search.isOnlyMainnet) {
      delete search.isOnlyMainnet;
    } else {
      search.isOnlyMainnet = true;
    }

    trackEvent({
      category: 'Map',
      action: 'toggle testnet',
      label: search.isOnlyMainnet ? 'on' : 'off',
    });

    if (location.search !== `?${stringify(search)}`) {
      history.push(`?${stringify(search)}`, location.state);
    }
  }, [history, location.search, location.state]);

  const isOnlyMainnetVisible = useMemo(
    () => !!parse(location.search).isOnlyMainnet,
    [location.search],
  );

  return [isOnlyMainnetVisible, toggleShowTestnet];
};
