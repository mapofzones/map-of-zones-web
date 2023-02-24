import { NumberType } from 'components/ui';
import { DatasetInfo } from 'components/ui/Charts/AreaChart/AreaChart.props';

export interface ChartContainerProps {
  className?: string;
  chartType?: ChartType;
  data: any[]; // use generic type
  datasetInfo: { [key: string]: DatasetInfo };
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
