import { ChartType } from 'components/ChartContainer';
import { LegendMetadata } from 'components/OverviewChartCardWithMetadata/OverviewCardLegendWithMetadata';
import { NumberType } from 'ui';

export type DataWithChart<T> = { chart: T[] };

export interface OverviewCardMetadata<T extends DataWithChart<K>, K> {
  numberType: NumberType;
  chartTypes: ChartType[];
  chartKeys: (keyof K)[];
  dataset: { [key: string]: DatasetMetadata<T, K> };
  wrappedInSmallScreen?: boolean;
}

interface DatasetMetadata<T, K> extends LegendMetadata {
  legendValueAccessorKey?: keyof T;
  chartValueAccessorKey?: keyof K;
}
