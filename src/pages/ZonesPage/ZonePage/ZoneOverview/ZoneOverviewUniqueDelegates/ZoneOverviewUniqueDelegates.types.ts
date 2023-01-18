/* eslint-disable sort-exports/sort-exports */

import { OverviewCardMetadata } from 'components/OverviewChartCard';
import { ChartItemWithTime } from 'types/chart';

export interface ZoneOverviewUniqueDelegatesCardResult {
  data: ZoneOverviewUniqueDelegatesCardData;
}

export interface ZoneOverviewUniqueDelegatesCardData {
  zone: string;
  totalDelegatorsCount: number;
  chart: UniqueDelegatesChart[];
}

interface UniqueDelegatesChart extends ChartItemWithTime {
  time: number;
  delegatorsCount: number;
}

export type IbcTransfersOverviewCardMetadata = OverviewCardMetadata<
  ZoneOverviewUniqueDelegatesCardData,
  UniqueDelegatesChart
>;
