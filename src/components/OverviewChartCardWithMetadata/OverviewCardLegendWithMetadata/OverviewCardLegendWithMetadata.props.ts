import { ReactNode } from 'react';

import { ElementSize } from 'types/ElementSize';
import { NumberType } from 'ui';

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

export interface OverviewCardLegendWithMetadataProps {
  className?: string;
  metadata: { [key: string]: LegendMetadata };
  values: { [key: string]: number | undefined };
  loading: boolean;
  wrappedInSmallScreen?: boolean;
}
