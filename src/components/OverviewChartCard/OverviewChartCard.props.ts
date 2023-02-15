import { ChartItemWithTime } from 'types/chart';

import { DataWithChart, OverviewCardMetadata } from './OverviewChartCard.types';

export type OverviewCardPeriod = '1w' | '2w' | '1m';

export interface OverviewChartCardProps<T extends DataWithChart<K>, K extends ChartItemWithTime> {
  className?: string;
  metadata: OverviewCardMetadata<T, K>;
  title: string;
  data: T | undefined;
  loading?: boolean;
  chartData: ChartItemWithTime[];
  onPeriodSelected?: (key: OverviewCardPeriod) => void;
}
