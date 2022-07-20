import { PeriodKeys } from 'components';

import { useDefaultSearchParam } from './useDefaultSearchParam';

export function useSelectedPeriod() {
  return useDefaultSearchParam<PeriodKeys>('period', PeriodKeys.DAY);
}
