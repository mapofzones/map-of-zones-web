import { ChartItemByString } from 'types/chart';

export interface LineChartProps {
  data: ChartItemByString[];
  className?: string;
  dataKey: string;
}
