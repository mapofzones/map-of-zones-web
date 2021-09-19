import { useCallback, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { parse, stringify } from 'querystringify';

import { trackEvent } from 'common/helper';

export const useMapFullscreen = () => {
  const history = useHistory();
  const location = useLocation();

  const toggleFullScreen = useCallback(() => {
    const search = parse(location.search);

    if (search.fullscreen) {
      delete search.fullscreen;
    } else {
      search.fullscreen = true;
    }

    trackEvent({
      category: 'Map',
      action: 'full screen',
      label: search.fullscreen ? 'on' : 'off',
    });

    if (location.search !== `?${stringify(search)}`) {
      history.push(`?${stringify(search)}`);
    }
  }, [history, location.search]);

  const isMapFullscreen = useMemo(() => !!parse(location.search).fullscreen, [
    location.search,
  ]);

  return [isMapFullscreen, toggleFullScreen];
};
