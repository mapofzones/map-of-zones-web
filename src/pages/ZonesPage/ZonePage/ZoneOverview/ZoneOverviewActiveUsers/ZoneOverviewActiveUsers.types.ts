/* eslint-disable sort-exports/sort-exports */

import { OverviewCardMetadata } from 'components/OverviewChartCardWithMetadata';
import { ChartItemWithTime } from 'types/chart';

export interface ZoneOverviewActiveUsersCardResult {
  data: ZoneOverviewActiveUsersCardData;
}

export interface ZoneOverviewActiveUsersCardData {
  totalActiveAddresses?: number;
  totalIbcActiveAddresses?: number;
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
