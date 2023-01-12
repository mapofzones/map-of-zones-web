import { NumberType } from 'components/ui/NumberFormat';
import { ChartItemWithTime } from 'types/chart';

export interface BarChartProps {
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

export interface DatasetInfo {
  color?: string;
  title: string;
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
