import { useCallback, useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { parse, stringify } from 'querystringify';

import { PERIODS } from '../components/PeriodSwitcher';

export const usePeriodSelector = () => {
  const history = useHistory();
  const location = useLocation();
  const [selectedPeriod, setPeriod] = useState(PERIODS[0]);
  const updatePeriod = useCallback(
    period => {
      const search = parse(location.search);

      if (period && period.hours) {
        search.period = period.hours.toString(10);
      } else {
        delete search.period;
      }

      if (location.search !== `?${stringify(search)}`) {
        history.push(`?${stringify(search)}`);
      }
    },
    [history, location.search],
  );
  const period = useMemo(() => parseInt(parse(location.search).period, 10), [
    location.search,
  ]);

  useEffect(() => {
    if (period) {
      const matchedPeriod = PERIODS.find(({ hours }) => period === hours);

      if (matchedPeriod) {
        setPeriod(matchedPeriod);
      }
    } else {
      updatePeriod(PERIODS[0]);
    }
  }, [period, setPeriod, updatePeriod]);

  return [selectedPeriod, updatePeriod];
};
