import { LegendMetadata } from 'components/OverviewChartCardWithMetadata/OverviewCardLegendWithMetadata';
import { ChartType } from 'types/ChartType';
import { NumberType } from 'types/NumberType';

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
