import { useCallback, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { parse, stringify } from 'querystringify';

import { trackEvent } from 'common/helper';

export const useShowTestnet = () => {
  const history = useHistory();
  const location = useLocation();

  const toggleShowTestnet = useCallback(() => {
    const search = parse(location.search);

    if (search.testnet === 'true') {
      search.testnet = false;
    } else {
      search.testnet = true;
    }

    trackEvent({
      category: 'Map',
      action: 'toggle testnet',
      label: search.testnet ? 'on' : 'off',
    });

    if (location.search !== `?${stringify(search)}`) {
      history.push(`?${stringify(search)}`);
    }
  }, [history, location.search]);

  const isTestnetVisible = useMemo(
    () => parse(location.search).testnet === 'true',
    [location.search],
  );

  return [isTestnetVisible, toggleShowTestnet];
};
