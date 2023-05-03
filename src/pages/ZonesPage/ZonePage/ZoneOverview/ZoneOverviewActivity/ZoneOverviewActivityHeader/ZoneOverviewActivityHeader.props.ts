import { ReactNode } from 'react';

import { PeriodKeys } from 'components';

export interface ZoneOverviewActivityHeaderProps {
  className?: string;
  children?: ReactNode;
  selectedPeriod: PeriodKeys;
  onPeriodSelected: (period: PeriodKeys) => void;
}
