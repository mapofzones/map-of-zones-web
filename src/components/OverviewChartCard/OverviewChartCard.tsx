import { useState } from 'react';

import cn from 'classnames';

import { AreaChartIcon, BarChartIcon } from 'assets/icons';
import { ChartContainer, ChartType } from 'components/ChartContainer';
import { OverviewCardLegend } from 'components/OverviewCardLegend';
import { ButtonGroup, Card } from 'components/ui';
import { ChartItemWithTime } from 'types/chart';
import { ElementSize } from 'types/ElementSize';

import styles from './OverviewChartCard.module.scss';
import { DataWithChart } from './OverviewChartCard.types';

import { OverviewChartCardProps } from '.';

export const CHART_ICONS = {
  [ChartType.AREA]: AreaChartIcon,
  [ChartType.BAR]: BarChartIcon,
};

export function OverviewChartCard<T extends DataWithChart<K>, K extends ChartItemWithTime>({
  metadata,
  title,
  data,
  chartData,
  loading = false,
  className,
}: OverviewChartCardProps<T, K>) {
  const [selectedChartType, setSelectedChartType] = useState<ChartType>(metadata.chartTypes[0]);

  const onChartSelected = (item: { key?: ChartType }) => {
    item?.key && setSelectedChartType(item.key);
  };

  const legendMetadata = Object.keys(metadata.dataset).reduce((acc: any, key: string) => {
    const dataset = metadata.dataset[key];
    acc[dataset.legendValueAccessorKey] = dataset;
    return acc;
  }, {});

  const legendData = Object.keys(metadata.dataset).reduce((acc: any, key: string) => {
    const dataset = metadata.dataset[key];
    acc[dataset.legendValueAccessorKey] = data ? data[dataset.legendValueAccessorKey] : undefined;
    return acc;
  }, {});

  const chartMetadata = Object.keys(metadata.dataset).reduce((acc: any, key: string) => {
    const dataset = metadata.dataset[key];
    if (dataset.chartValueAccessorKey) {
      acc[dataset.chartValueAccessorKey] = {
        title: dataset.title,
        color: dataset.color,
      };
    }

    return acc;
  }, {});

  return (
    <Card title={title} className={cn(styles.wrapper, className)}>
      {metadata.chartTypes.length > 1 && (
        <ButtonGroup
          className={styles.chartTypeSwitcher}
          size={ElementSize.SMALL}
          buttons={metadata.chartTypes.map((type: ChartType) => ({
            key: type,
            icon: CHART_ICONS[type],
          }))}
          setSelectedButton={onChartSelected}
        />
      )}
      <OverviewCardLegend
        metadata={legendMetadata}
        values={legendData}
        loading={loading}
        wrappedInSmallScreen={metadata.wrappedInSmallScreen}
      />
      <ChartContainer
        chartType={selectedChartType}
        data={chartData}
        loading={loading}
        datasetInfo={chartMetadata}
        dataFormatType={metadata.numberType}
      />
    </Card>
  );
}
