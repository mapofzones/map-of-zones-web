import { PeriodKeys } from 'components';

export const periodMapping: Record<string, PeriodKeys> = {
  '24': PeriodKeys.DAY,
  '168': PeriodKeys.WEEK,
  '720': PeriodKeys.MONTH,
};
