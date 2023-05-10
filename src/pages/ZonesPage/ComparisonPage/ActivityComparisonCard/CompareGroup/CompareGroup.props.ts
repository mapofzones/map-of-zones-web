import { NumberType } from 'ui';

type ComparisonGroupValues<T> = {
  [K in keyof T]: T[K] extends number | undefined ? T[K] : never;
};

export interface ComparisonGroupItem {
  zoneName: string;
  zone: string;
}

export interface VolumeComparisonGroupProps<K> {
  className?: string;
  zones: ComparisonGroupItem[];
  data?: ComparisonGroupValues<K>[];
  loading: boolean;
  numberType: NumberType;
  metadata: Record<keyof K, MetadataItem>;
}

interface MetadataItem {
  title: string;
}
