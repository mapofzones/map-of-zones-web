import { ChartItemWithTime } from 'types/chart';
import { NumberType } from 'ui/NumberFormat';

export interface AreaChartProps {
  className?: string;
  data: any[];
  dataFormat?: NumberType;
  datasetInfo: { [key: string]: DatasetInfo };
  timeFormat?: string;
  tooltipTimeFormat?: string;
  isZeroMinXAxisValue?: boolean;
  lastDashedPeriod?: boolean;
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
