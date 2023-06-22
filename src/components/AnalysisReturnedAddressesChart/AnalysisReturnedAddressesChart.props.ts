import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { PeriodKeys } from 'components';
import { ZoneAnalysisReturnedAddressesDataByType } from 'types/models/Analysis/ZoneAnalysisReturnedAddressesData';
import { DatasetInfo } from 'ui/Charts/BarChart/BarChart.props';

export interface AnalysisReturnedAddressesChartProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  loading?: boolean;
  data: ZoneAnalysisReturnedAddressesDataByType[];
  period: PeriodKeys;
  metadata: DatasetInfo[];
}
