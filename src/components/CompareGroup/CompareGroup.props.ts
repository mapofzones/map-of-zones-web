import { NumberType } from 'types/NumberType';
import { DatasetInfo } from 'ui/Charts/AreaChart/AreaChart.props'; // TODO: common DatasetInfo

export interface ComparisonGroupItem {
  zone: string;
}

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
  zonesDetailsByKey: Record<string, DatasetInfo>;
}
