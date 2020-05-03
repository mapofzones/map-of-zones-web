import { useCallback, useEffect, useMemo, useState, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { parse, stringify } from 'querystringify';

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}

export const useFocusedZone = nodes => {
  const history = useHistory();
  const location = useLocation();
  const [focusedZone, setFocusedZone] = useState(undefined);
  const updateZone = useCallback(
    zone => {
      const search = parse(location.search);

      if (zone && zone.id) {
        search.zone = zone.id;
      } else {
        delete search.zone;
      }

      history.push(`?${stringify(search)}`);
    },
    [history, location.search],
  );
  const zone = useMemo(() => parse(location.search).zone, [location.search]);
  const period = useMemo(() => parseInt(parse(location.search).period, 10), [
    location.search,
  ]);
  const prevPeriod = usePrevious(period);

  // Reset the selected zone if a period is changed manually (skip initial period value)
  useEffect(() => {
    if (period && prevPeriod && period !== prevPeriod) {
      updateZone(undefined);
    }
  }, [period, prevPeriod, updateZone]);

  useEffect(() => {
    if (zone && nodes) {
      const matchedZone = nodes.find(({ id }) => zone === id);

      if (matchedZone) {
        setFocusedZone(matchedZone);
      }
    } else {
      setFocusedZone(undefined);
    }
  }, [nodes, zone, setFocusedZone]);

  return [focusedZone, updateZone];
};
