import { NumberType } from 'components/ui';
import { ChartItemWithTime } from 'components/ui/AreaChart/AreaChart.props';

export interface AreaChartBlockProps {
  className?: string;
  color?: string;
  data: ChartItemWithTime[];
  dataKey: string;
  dataFormatType: NumberType;
  loading: boolean;
}
