export type AnalysisCardPeriod = '1w' | '2w' | '1m';

export const ANALYSIS_PERIODS_IN_HOURS_BY_KEY: Record<AnalysisCardPeriod, number> = {
  '1w': 24 * 7,
  '2w': 24 * 7 * 2,
  '1m': 24 * 30,
};
