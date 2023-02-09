import { ReactNode } from 'react';

import { NumberType } from 'components';
import { ElementSize } from 'types/ElementSize';

export interface LegendMetadata {
  title: string;
  tooltipText: string;
  numberType: NumberType;
  size: ElementSize;
  showPeriod: boolean;
  defaultSkeletonText: string;
  icon: ReactNode;
  color?: string;
  additional: boolean;
}

export interface OverviewCardLegendProps {
  className?: string;
  metadata: { [key: string]: LegendMetadata };
  values: { [key: string]: number | undefined };
  loading: boolean;
  wrappedInSmallScreen?: boolean;
}
