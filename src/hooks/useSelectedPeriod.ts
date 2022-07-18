import { useEffect, useCallback } from 'react';

import { useSearchParams } from 'react-router-dom';

import { PeriodKeys } from 'pages/HomePage/Sidebar/ZonesInfo/Types';

export function useSelectedPeriod() {
  const [search, setSearch] = useSearchParams();
  const period = search.get('period');

  const selectedPeriod =
    period && Object.values(PeriodKeys).some((v) => v === period)
      ? (period as PeriodKeys)
      : PeriodKeys.DAY;

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
