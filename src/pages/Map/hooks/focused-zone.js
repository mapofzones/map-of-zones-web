import { useCallback, useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { parse, stringify } from 'querystringify';

export const useFocusedZone = nodes => {
  const history = useHistory();
  const location = useLocation();

  const [focusedZone, setFocusedZone] = useState(undefined);

  const zoneFromSearch = useMemo(() => parse(location.search).zone, [
    location.search,
  ]);

  const updateZone = useCallback(
    zone => {
      if (zone && nodes) {
        const matchedZone = nodes.find(({ id }) => zone?.id === id);

        if (matchedZone) {
          setFocusedZone(zone);
        }
      } else {
        setFocusedZone(undefined);
      }

      const search = parse(location.search);

      if (zone?.id) {
        search.zone = zone.id;
      } else {
        delete search.zone;
      }

      if (location.search !== `?${stringify(search)}`) {
        history.push(`?${stringify(search)}`);
      }
    },
    [history, location.search, nodes, setFocusedZone],
  );

  useEffect(() => {
    if (zoneFromSearch && nodes) {
      const matchedZone = nodes.find(({ id }) => zoneFromSearch === id);

      if (matchedZone) {
        setFocusedZone(matchedZone);
      }
    } else {
      setFocusedZone(undefined);
    }
  }, [nodes, zoneFromSearch, setFocusedZone]);

  return [focusedZone, updateZone];
};
