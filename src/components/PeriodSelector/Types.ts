export enum PeriodKeys {
  DAY = '24h',
  WEEK = '7d',
  MONTH = '30d',
}

export const PERIODS_IN_HOURS_BY_KEY: Record<PeriodKeys, number> = {
  [PeriodKeys.DAY]: 24,
  [PeriodKeys.WEEK]: 24 * 7,
  [PeriodKeys.MONTH]: 24 * 30,
};
