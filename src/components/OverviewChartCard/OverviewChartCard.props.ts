import { ChartItemWithTime } from 'types/chart';

import { DataWithChart, OverviewCardMetadata } from './OverviewChartCard.types';

export interface OverviewChartCardProps<T extends DataWithChart<K>, K extends ChartItemWithTime> {
  className?: string;
  metadata: OverviewCardMetadata<T, K>;
  title: string;
  data: T | undefined;
  loading?: boolean;
}
