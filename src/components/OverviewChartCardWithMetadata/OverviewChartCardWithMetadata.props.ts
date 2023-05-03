import { DataWithChart, OverviewCardMetadata } from './OverviewChartCardWithMetadata.types';

export type OverviewCardPeriod = '1w' | '2w' | '1m';

export interface OverviewChartCardProps<T extends DataWithChart<K>, K> {
  className?: string;
  metadata: OverviewCardMetadata<T, K>;
  title: string;
  data: T | undefined;
  loading?: boolean;
  chartData: K[];
  onPeriodSelected?: (key: OverviewCardPeriod) => void;
  period?: OverviewCardPeriod; // TODO: use not undefined
}

export const OVERVIEW_PERIODS_API_KEYS: Record<OverviewCardPeriod, string> = {
  '1w': '7d',
  '2w': '14d',
  '1m': '30d',
};

export const OVERVIEW_PERIODS_IN_HOURS_BY_KEY: Record<OverviewCardPeriod, number> = {
  '1w': 24 * 7,
  '2w': 24 * 7 * 2,
  '1m': 24 * 30,
};
