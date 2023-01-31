import { NumberType } from 'components/ui';
import { DatasetInfo } from 'components/ui/Charts/AreaChart/AreaChart.props';
import { ChartItemWithTime } from 'types/chart';

export interface ChartContainerProps {
  className?: string;
  chartType?: ChartType;
  data: ChartItemWithTime[];
  datasetInfo: { [key: string]: DatasetInfo };
  dataFormatType: NumberType;
  loading: boolean;
  isZeroMinXAxisValue?: boolean;
  tooltipTimeFormat?: string;
}

export enum ChartType {
  AREA = 'area',
  BAR = 'bar',
}
