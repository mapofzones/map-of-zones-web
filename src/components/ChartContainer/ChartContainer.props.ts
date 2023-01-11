import { NumberType } from 'components/ui';
import { ChartItemWithTime, DatasetInfo } from 'components/ui/Charts/AreaChart/AreaChart.props';

export interface ChartContainerProps {
  className?: string;
  chartType?: ChartType;
  data: ChartItemWithTime[];
  datasetInfo: { [key: string]: DatasetInfo };
  dataFormatType: NumberType;
  loading: boolean;
}

export enum ChartType {
  AREA = 'area',
  BAR = 'bar',
}
