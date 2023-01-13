/* eslint-disable sort-exports/sort-exports */
import { OverviewCardMetadata } from 'components/OverviewChartCard';
import { ChartItemWithTime } from 'types/chart';

export interface ZoneOverviewIbcVolumeCardResult {
  data: ZoneOverviewIbcVolumeCardData;
}

export interface ZoneOverviewIbcVolumeCardData {
  zone: string;
  totalIbcIn: number;
  totalIbcOut: number;
  totalIbc: number;
  chart: IbcVolumeChart[];
}

interface IbcVolumeChart extends ChartItemWithTime {
  time: number;
  ibcIn: number;
  ibcOut: number;
  total: number;
}

export type IbcVolumeOverviewCardMetadata = OverviewCardMetadata<
  ZoneOverviewIbcVolumeCardData,
  IbcVolumeChart
>;
