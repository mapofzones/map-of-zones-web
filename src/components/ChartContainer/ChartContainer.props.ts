import { NumberType } from 'ui';
import { DatasetInfo } from 'ui/Charts/AreaChart/AreaChart.props';

type ChartKeys<T> = Omit<T, 'time'>; //

export interface ChartContainerProps<T> {
  className?: string;
  chartType?: ChartType;
  data: T[];
  datasetInfo: { [key in keyof ChartKeys<T>]: DatasetInfo };
  dataFormatType: NumberType;
  loading: boolean;
  isZeroMinXAxisValue?: boolean;
  tooltipTimeFormat?: string;
  lastDashedPeriod?: boolean;
  chartTimeFormat?: string;
}

export enum ChartType {
  AREA = 'area',
  BAR = 'bar',
}
