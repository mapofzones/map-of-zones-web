import { PeriodKeys } from 'components';

import { useDefaultSearchParam } from './useDefaultSearchParam';

export function useSelectedPeriod(withDefaultValue = false) {
  return useDefaultSearchParam<PeriodKeys>('period', withDefaultValue ? PeriodKeys.DAY : undefined);
}
