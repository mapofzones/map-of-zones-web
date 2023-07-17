import { ChartType } from 'types/ChartType';
import { DatasetInfo } from 'types/DatasetInfo';
import { NumberType } from 'types/NumberType';

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
