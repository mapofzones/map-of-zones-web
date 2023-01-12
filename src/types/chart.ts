import { ChartItemByString } from 'utils/helper';

export interface ChartItemWithTime extends ChartItemByString {
  time: number;
}
