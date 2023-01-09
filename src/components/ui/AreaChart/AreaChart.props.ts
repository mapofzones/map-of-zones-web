import { values } from 'lodash';
import { ChartItemByString } from 'utils/helper';

import { NumberType } from '../NumberFormat';

export interface AreaChartProps {
  className?: string;
  data: ChartItemWithTime[];
  dataFormat?: NumberType;
  datasetInfo: { [key: string]: DatasetInfo };
  timeFormat?: string;
}

export interface ChartData {
  values: ChartItemWithTime[];
  colors: string;
}

export interface ChartItemWithTime extends ChartItemByString {
  time: number;
}

export interface DatasetInfo {
  color?: string;
  description: string;
}

// values: [{
//   time: 2133333333333333333,
//   ibcTotal: 123,
//   ibcIn: 23,
//   ibcOut: 100
// }],
// colors: {
//   ibcTotal: '#sad'
// }
