import { ChartItemWithTime } from 'types/chart';
import { MappedComparisonResult } from 'utils/mapComparisonRestApiChartsData';

export type AnalysisComparisonBaseResult<
  T extends { data: { chart: P[] } },
  K extends keyof T['data'],
  P extends ChartItemWithTime
> = {
  data: Pick<T['data'], K>[];
  charts: MappedComparisonResult<T['data']['chart']>;
};
