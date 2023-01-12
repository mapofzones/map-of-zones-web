/* eslint-disable sort-exports/sort-exports */

import { OverviewCardMetadata } from 'components/OverviewChartCard';
import { ChartItemWithTime } from 'types/chart';

export interface ZoneOverviewIbcTransfersCardResult {
  data: ZoneOverviewIbcTransfersCardData;
}

export interface ZoneOverviewIbcTransfersCardData {
  zone: string;
  totalIbcTransfersCount?: number;
  totalPending?: number;
  chart: IbcTransfersChart[];
}

export interface IbcTransfersChart extends ChartItemWithTime {
  time: number;
  pending: number;
  ibcTransfersCount: number;
}

export type IbcTransfersOverviewCardMetadata = OverviewCardMetadata<
  ZoneOverviewIbcTransfersCardData,
  IbcTransfersChart
>;
