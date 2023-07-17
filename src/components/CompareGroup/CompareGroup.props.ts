import { DatasetInfo } from 'types/DatasetInfo';
import { NumberType } from 'types/NumberType';

export type CompareGroupLayoutVariant = 'columns-3' | 'rows-2' | 'rows-3';

export interface ComparisonGroupItem {
  zone: string;
}

export type ComparisonGroupValues<T> = {
  [K in keyof T]: T[K] extends number | undefined ? T[K] : never;
};

export interface MetadataItem {
  title: string;
  numberType: NumberType;
}

export interface VolumeComparisonGroupProps<K> {
  className?: string;
  metadata: Record<keyof K, MetadataItem>;
  data?: (ComparisonGroupItem & ComparisonGroupValues<K>)[];
  loading: boolean;
  zonesDetailsByKey: Record<string, DatasetInfo>;
  layoutVariant?: CompareGroupLayoutVariant;
}
