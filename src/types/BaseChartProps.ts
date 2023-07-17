import { DatasetInfo } from './DatasetInfo';
import { NumberType } from './NumberType';

export interface BaseChartProps {
  className?: string;
  data: any[];
  dataFormat?: NumberType;
  datasetInfo: { [key: string]: DatasetInfo };
  timeFormat?: string;
  tooltipTimeFormat?: string;
  isZeroMinXAxisValue?: boolean;
}
