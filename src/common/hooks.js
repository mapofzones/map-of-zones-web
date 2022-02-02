import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { parse } from 'querystringify';
import { useQuery } from '@apollo/react-hooks';

import { trackEvent } from './helper';
import { MOBILE_MAX_WIDTH } from './constants';

export const useLocationTracker = () => {
  const location = useLocation();

  useEffect(
    () =>
      trackEvent({
        category: 'App',
        action: 'open',
        label: location.pathname + location.search,
        extra: parse(location.search),
      }),
    [], // eslint-disable-line react-hooks/exhaustive-deps
  );

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

export const useRealtimeQuery = (query, subscription, options) => {
  const { variables } = options;
  const { subscribeToMore, data } = useQuery(query, options);
  useEffect(
    () =>
      subscribeToMore({
        document: subscription,
        variables,
        updateQuery: (prev, { subscriptionData }) =>
          subscriptionData.data || prev,
      }),
    [subscribeToMore, variables, subscription],
  );

  return data;
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export const useMobileSize = () => {
  const { width } = useWindowSize();

  return !!width && width <= MOBILE_MAX_WIDTH;
};

export const usePrevious = value => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
