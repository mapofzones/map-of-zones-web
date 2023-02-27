/* eslint-disable sort-exports/sort-exports */

import { OverviewCardMetadata } from 'components/OverviewChartCard';

export interface ZoneOverviewIbcTransfersCardResult {
  data: ZoneOverviewIbcTransfersCardData;
}

export interface ZoneOverviewIbcTransfersCardData {
  totalIbcTransfersCount?: number;
  ibcTransfersFailedCount?: number;
  ibcTransfersInCount?: number;
  ibcTransfersOutCount?: number;
  chart: IbcTransfersChart[];
}

export interface IbcTransfersChart {
  time: number;
  ibcTransfersCount: number;
  ibcTransfersInCount: number;
  ibcTransfersOutCount: number;
  ibcTransfersFailedCount: number;
}

export type IbcTransfersOverviewCardMetadata = OverviewCardMetadata<
  ZoneOverviewIbcTransfersCardData,
  IbcTransfersChart
>;
