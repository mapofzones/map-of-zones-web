import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { parse } from 'querystringify';

import { trackEvent } from './helper';

export const useLocationTracker = () => {
  const location = useLocation();

  useEffect(
    () =>
      trackEvent({
        category: 'Location',
        action: 'change',
        label: location.pathname + location.search,
        extra: parse(location.search),
      }),
    [location],
  );
};
