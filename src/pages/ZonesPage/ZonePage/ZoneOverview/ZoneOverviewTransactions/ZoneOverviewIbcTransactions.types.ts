/* eslint-disable sort-exports/sort-exports */

import { OverviewCardMetadata } from 'components/OverviewChartCardWithMetadata';
import { ChartItemWithTime } from 'types/chart';

export interface ZoneOverviewIbcTransactionsCardResult {
  data: ZoneOverviewIbcTransactionsCardData;
}

export interface ZoneOverviewIbcTransactionsCardData {
  zone: string;
  totalTxsCount?: number;
  chart: IbcTransactionsChart[];
}

interface IbcTransactionsChart extends ChartItemWithTime {
  time: number;
  value: number;
}

export type IbcTransactionsOverviewCardMetadata = OverviewCardMetadata<
  ZoneOverviewIbcTransactionsCardData,
  IbcTransactionsChart
>;
