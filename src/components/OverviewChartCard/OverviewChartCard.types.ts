import { ReactNode } from 'react';

import { ChartType } from 'components/ChartContainer';
import { NumberType } from 'components/ui';
import { ChartItemWithTime } from 'types/chart';
import { ElementSize } from 'types/ElementSize';

export type DataWithChart<T> = { chart: T[] };

export interface OverviewCardMetadata<T extends DataWithChart<K>, K extends ChartItemWithTime> {
  numberType: NumberType;
  chartTypes: ChartType[];
  chartKeys: (keyof K)[];
  dataset: { [key: string]: DatasetMetadata<T, K> };
}

interface DatasetMetadata<T, K> {
  title: string;
  numberType: NumberType;
  legendValueAccessorKey: keyof T;
  chartValueAccessorKey?: keyof K;
  tooltipText: string;
  size: ElementSize;
  showPeriod: boolean;
  defaultSkeletonText: string;
  icon: ReactNode;
  additional: boolean;
  color?: string;
  valuePostfixComponent?: ReactNode;
}
