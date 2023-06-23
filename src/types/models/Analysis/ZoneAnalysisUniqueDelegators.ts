/* eslint-disable sort-exports/sort-exports */
import { ChartItemWithTime } from 'types/chart';

export interface AnalysisUniqueDelegatorsApiCardResult {
  data: AnalysisUniqueDelegatorsCardData;
}

export interface AnalysisUniqueDelegatorsCardData {
  zone: string;
  totalDelegatorsCount: number;
  chart: UniqueDelegatorsChart[];
}

export interface UniqueDelegatorsChart extends ChartItemWithTime {
  time: number;
  delegatorsCount: number;
}
