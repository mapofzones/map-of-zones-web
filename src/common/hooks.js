import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { parse } from 'querystringify';
import { useQuery } from '@apollo/react-hooks';

import { trackEvent } from './helper';

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
