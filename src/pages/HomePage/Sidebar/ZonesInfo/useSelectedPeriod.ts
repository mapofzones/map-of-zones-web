import { useEffect, useMemo, useCallback } from 'react';

import { useSearchParams } from 'react-router-dom';

import { PeriodKeys } from './Types';

export function useSelectedPeriod() {
  const [search, setSearch] = useSearchParams();
  const period = search.get('period');

  const selectedPeriod = useMemo(() => {
    return period && Object.values(PeriodKeys).some((v) => v === period)
      ? (period as PeriodKeys)
      : PeriodKeys.DAY;
  }, [period]);

  const setSelectedPeriod = useCallback(
    (value: PeriodKeys) => {
      search.set('period', value);
      setSearch(search);
    },
    [search, setSearch]
  );

  useEffect(() => {
    if (!search.get('period')) {
      setSelectedPeriod(PeriodKeys.DAY);
    }
  }, [search, setSelectedPeriod]);

  return [selectedPeriod, setSelectedPeriod] as const;
}
