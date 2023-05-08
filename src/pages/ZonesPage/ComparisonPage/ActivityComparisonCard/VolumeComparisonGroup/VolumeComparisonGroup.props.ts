import { ReactNode } from 'react';

import { NumberType } from 'components';

type ComparisoinGroupValues<T> = {
  [K in keyof T]: T[K] extends number | undefined ? T[K] : never;
};

export interface ComparisonGroupItem {
  zoneName: string;
  zone: string;
}

export interface VolumeComparisonGroupProps<T extends string, K> {
  className?: string;
  children?: ReactNode;
  zones: ComparisonGroupItem[];
  data?: ComparisoinGroupValues<K>[];
  loading: boolean;
  numberType: NumberType;
  colors: string[];
  metadata: Record<T, MetadataItem<K>>;
}

interface MetadataItem<K> {
  title: string;
  property: keyof K;
}
