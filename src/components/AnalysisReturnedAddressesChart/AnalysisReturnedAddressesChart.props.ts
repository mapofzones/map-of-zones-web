import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { PeriodKeys } from 'components';
import { DatasetInfo } from 'types/DatasetInfo';
import { ZoneAnalysisReturnedAddressesDataByType } from 'types/models/Analysis/ZoneAnalysisReturnedAddressesData';

export interface AnalysisReturnedAddressesChartProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  loading?: boolean;
  data: ZoneAnalysisReturnedAddressesDataByType[];
  period: PeriodKeys;
  metadata: DatasetInfo[];
}
