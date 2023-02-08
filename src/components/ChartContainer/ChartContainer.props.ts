import { NumberType } from 'components/ui';
import { DatasetInfo } from 'components/ui/Charts/AreaChart/AreaChart.props';
import { ChartItemWithTime } from 'types/chart';

type ChartKeys<T extends ChartItemWithTime> = Omit<T, 'time'>; //

export interface ChartContainerProps<T extends ChartItemWithTime> {
  className?: string;
  chartType?: ChartType;
  data: T[];
  datasetInfo: { [key in keyof ChartKeys<T>]: DatasetInfo };
  dataFormatType: NumberType;
  loading: boolean;
  isZeroMinXAxisValue?: boolean;
  tooltipTimeFormat?: string;
}

export enum ChartType {
  AREA = 'area',
  BAR = 'bar',
}
