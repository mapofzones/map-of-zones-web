import { useCallback, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { parse, stringify } from 'querystringify';

import { trackEvent } from 'common/helper';

export const useGraphType = () => {
  const history = useHistory();
  const location = useLocation();

  const toggleGraphType = useCallback(() => {
    const search = parse(location.search);

    if (!search.graphType) {
      search.graphType = '3D';
    } else {
      delete search.graphType;
    }

    trackEvent({
      category: 'Map',
      action: 'change graph type',
      label: search.graphType ? '3D' : '2D',
    });

    history.push(`?${stringify(search)}`);
  }, [history, location.search]);

  const graphType = useMemo(() => parse(location.search).graphType || '2D', [
    location.search,
  ]);

  return [graphType, toggleGraphType];
};
