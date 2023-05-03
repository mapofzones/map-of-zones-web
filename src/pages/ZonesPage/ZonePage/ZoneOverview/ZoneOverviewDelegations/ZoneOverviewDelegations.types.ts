/* eslint-disable sort-exports/sort-exports */

import { OverviewCardMetadata } from 'components/OverviewChartCardWithMetadata';
import { ChartItemWithTime } from 'types/chart';

export interface ZoneOverviewDelegationsCardResult {
  data: ZoneOverviewDelegationsCardData;
}

export interface ZoneOverviewDelegationsCardData {
  totalDelegated?: number;
  // totalRedelegated?: number;
  totalUndelegated?: number;
  chart: DelegationsChart[];
}

export interface DelegationsChart extends ChartItemWithTime {
  time: number;
  delegationAmount: number;
  // redelegated: number;
  undelegationAmount: number;
}

export type IbcDelegationsOverviewCardMetadata = OverviewCardMetadata<
  ZoneOverviewDelegationsCardData,
  DelegationsChart
>;
