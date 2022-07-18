import { ChartItemByString } from 'utils/helper';

export interface LineChartProps {
  data: ChartItemByString[];
  className?: string;
  dataKey: string;
}
