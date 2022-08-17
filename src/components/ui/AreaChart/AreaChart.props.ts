import { ChartItemByString } from 'utils/helper';

import { NumberType } from '../NumberFormat';

export interface AreaChartProps {
  data: ChartItemWithTime[];
  className?: string;
  dataKey: string;
  dataFormat?: NumberType;
  timeFormat?: string;
}

export interface ChartItemWithTime extends ChartItemByString {
  time: number;
}
