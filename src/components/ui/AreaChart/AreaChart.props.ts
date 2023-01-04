import { ChartItemByString } from 'utils/helper';

import { NumberType } from '../NumberFormat';

export interface AreaChartProps {
  className?: string;
  color?: string;
  data: ChartItemWithTime[];
  dataFormat?: NumberType;
  dataKey: string;
  timeFormat?: string;
}

export interface ChartItemWithTime extends ChartItemByString {
  time: number;
}
