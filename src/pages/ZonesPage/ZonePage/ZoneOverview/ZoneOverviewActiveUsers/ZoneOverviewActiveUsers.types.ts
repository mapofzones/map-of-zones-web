/* eslint-disable sort-exports/sort-exports */

import { OverviewCardMetadata } from 'components/OverviewChartCard';
import { ChartItemWithTime } from 'types/chart';

export interface ZoneOverviewActiveUsersCardResult {
  data: ZoneOverviewActiveUsersCardData;
}

export interface ZoneOverviewActiveUsersCardData {
  totalDailyActiveUsers?: number;
  totalIbcDailyActiveUsers?: number;
  chart: ActiveUsersChart[];
}

export interface ActiveUsersChart extends ChartItemWithTime {
  time: number;
  dailyActiveUsers: number;
  ibcDailyActiveUsers: number;
}

export type ActiveUsersOverviewCardMetadata = OverviewCardMetadata<
  ZoneOverviewActiveUsersCardData,
  ActiveUsersChart
>;
