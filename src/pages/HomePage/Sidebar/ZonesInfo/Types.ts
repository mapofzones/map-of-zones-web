export enum PeriodKeys {
  DAY = '24h',
  WEEK = '7d',
  MONTH = '30d',
}

export const PERIODS: Record<PeriodKeys, number> = {
  '24h': 24,
  '7d': 24 * 7,
  '30d': 24 * 30,
};
