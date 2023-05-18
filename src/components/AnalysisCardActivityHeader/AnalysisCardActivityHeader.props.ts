import { ReactNode } from 'react';

import { PeriodKeys } from 'components';

export interface AnalysisCardActivityHeaderProps {
  className?: string;
  children?: ReactNode;
  selectedPeriod: PeriodKeys;
  onPeriodSelected: (period: PeriodKeys) => void;
}
