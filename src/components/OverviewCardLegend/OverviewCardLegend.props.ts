import { ReactNode } from 'react';

import { NumberType } from 'components';
import { ElementSize } from 'types/ElementSize';

export interface LegendMetadata {
  title: string;
  tooltipText: string;
  numberType: NumberType;
  size: ElementSize;
  loading: boolean;
  showPeriod: boolean;
  defaultSkeletonText: string;
  icon: ReactNode;
  additional: boolean;
  valuePostfixComponent?: ReactNode;
}

export interface OverviewCardLegendProps {
  className?: string;
  metadata: { [key: string]: LegendMetadata };
  values: { [key: string]: number | undefined };
  loading: boolean;
}
