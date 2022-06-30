import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import { PeriodKeys } from './Types';

export function useSelectedPeriod() {
  const [search, setSearch] = useSearchParams();
  const period = search.get('period');
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodKeys>(
    period && Object.values(PeriodKeys).some((v) => v === period)
      ? (period as PeriodKeys)
      : PeriodKeys.DAY
  );

  useEffect(() => {
    search.set('period', selectedPeriod);
    setSearch(search);
  }, [selectedPeriod]);

  return [selectedPeriod, setSelectedPeriod] as const;
}
