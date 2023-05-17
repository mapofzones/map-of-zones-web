import { NumberType } from 'types/NumberType';
import { DatasetInfo } from 'ui/Charts/AreaChart/AreaChart.props';

import { ChartType } from '../../types/ChartType';

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
