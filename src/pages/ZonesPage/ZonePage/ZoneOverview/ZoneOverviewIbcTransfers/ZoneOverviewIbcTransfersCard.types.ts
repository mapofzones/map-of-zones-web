/* eslint-disable sort-exports/sort-exports */

import { OverviewCardMetadata } from 'components/OverviewChartCard';
import { ChartItemWithTime } from 'types/chart';

export interface ZoneOverviewIbcTransfersCardResult {
  data: ZoneOverviewIbcTransfersCardData;
}

export interface ZoneOverviewIbcTransfersCardData {
  totalIbcTransfersCount?: number;
  totalPending?: number;
  chart: IbcTransfersChart[];
}

export interface IbcTransfersChart {
  time: number;
  pending: number;
  ibcTransfersCount: number;
}

export type IbcTransfersOverviewCardMetadata = OverviewCardMetadata<
  ZoneOverviewIbcTransfersCardData,
  IbcTransfersChart
>;
