import { useEffect, useState, useMemo } from 'react';

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

  useEffect(() => {
    if (!period) {
      setSelectedPeriod(PeriodKeys.DAY);
    }
  }, [search]);

  const setSelectedPeriod = (value: PeriodKeys) => {
    search.set('period', value);
    setSearch(search);
  };

  return [selectedPeriod, setSelectedPeriod] as const;
}
