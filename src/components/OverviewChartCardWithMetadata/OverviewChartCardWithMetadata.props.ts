import { AnalysisCardPeriod } from 'types/AnalysisCardPeriod';

import { DataWithChart, OverviewCardMetadata } from './OverviewChartCardWithMetadata.types';

export interface OverviewChartCardProps<T extends DataWithChart<K>, K> {
  className?: string;
  metadata: OverviewCardMetadata<T, K>;
  title: string;
  data: T | undefined;
  loading?: boolean;
  chartData: K[];
  onPeriodSelected?: (key: AnalysisCardPeriod) => void;
  period?: AnalysisCardPeriod; // TODO: use not undefined
}

export const OVERVIEW_PERIODS_API_KEYS: Record<AnalysisCardPeriod, string> = {
  '1w': '7d',
  '2w': '14d',
  '1m': '30d',
};
