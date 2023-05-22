import { ZoneBase } from 'types/models/ZoneDetails';
import { NumberType } from 'types/NumberType';

export interface ComparisonGroupItem extends ZoneBase {}

export type ComparisonGroupValues<T> = {
  [K in keyof T]: T[K] extends number | undefined ? T[K] : never;
};

export interface MetadataItem {
  title: string;
}

export interface VolumeComparisonGroupProps<K> {
  className?: string;
  metadata: Record<keyof K, MetadataItem>;
  data?: (ComparisonGroupItem & ComparisonGroupValues<K>)[];
  loading: boolean;
  numberType: NumberType;
}
