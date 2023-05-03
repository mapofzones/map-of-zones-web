/* eslint-disable sort-exports/sort-exports */
import { OverviewCardMetadata } from 'components/OverviewChartCardWithMetadata';
import { ChartItemWithTime } from 'types/chart';

export interface ZoneOverviewIbcVolumeCardResult {
  data: ZoneOverviewIbcVolumeCardData;
}

export interface ZoneOverviewIbcVolumeCardData {
  totalIbcIn: number;
  totalIbcOut: number;
  totalIbc: number;
  chart: IbcVolumeChart[];
}

export interface IbcVolumeChart {
  time: number;
  ibcIn?: number;
  ibcOut?: number;
  total?: number;
}

export type IbcVolumeOverviewCardMetadata = OverviewCardMetadata<
  ZoneOverviewIbcVolumeCardData,
  IbcVolumeChart
>;
