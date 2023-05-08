import { ReactNode } from 'react';

import { NumberType } from 'components';

export interface ComparisoinGroupProps {
  ibcVolume?: number;
  ibcVolumeIn?: number;
  ibcVolumeOut?: number;
}

export interface ComparisonGroupItem extends ComparisoinGroupProps {
  zoneName: string;
  key: string;
}

export interface VolumeComparisonGroupProps {
  className?: string;
  children?: ReactNode;
  data?: ComparisonGroupItem[];
  loading: boolean;
  numberType: NumberType;
  colors: string[];
}
