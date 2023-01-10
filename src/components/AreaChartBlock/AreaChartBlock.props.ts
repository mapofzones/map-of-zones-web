import { NumberType } from 'components/ui';
import { ChartItemWithTime, DatasetInfo } from 'components/ui/Charts/AreaChart/AreaChart.props';

export interface AreaChartBlockProps {
  className?: string;
  data: ChartItemWithTime[];
  datasetInfo: { [key: string]: DatasetInfo };
  dataFormatType: NumberType;
  loading: boolean;
}
