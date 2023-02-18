import { useState } from 'react';

import cn from 'classnames';

import { AreaChartIcon, BarChartIcon } from 'assets/icons';
import { ChartContainer, ChartType } from 'components/ChartContainer';
import { OverviewCardLegend } from 'components/OverviewCardLegend';
import { ButtonGroup, Card } from 'components/ui';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { ChartItemWithTime } from 'types/chart';
import { ElementSize } from 'types/ElementSize';

import styles from './OverviewChartCard.module.scss';
import { DataWithChart } from './OverviewChartCard.types';

import { OverviewCardPeriod, OverviewChartCardProps } from '.';

const CHART_ICONS = {
  [ChartType.AREA]: AreaChartIcon,
  [ChartType.BAR]: BarChartIcon,
};

const PERIODS: OverviewCardPeriod[] = ['1w', '1m'];

const PERIOD_TITLES_BY_KEY: Record<OverviewCardPeriod, string> = {
  '1w': '1W',
  '2w': '2W',
  '1m': '1M',
};

export function OverviewChartCard<T extends DataWithChart<K>, K>({
  metadata,
  title,
  data,
  chartData,
  loading = false,
  className,
  onPeriodSelected,
}: OverviewChartCardProps<T, K>) {
  const [selectedChartType, setSelectedChartType] = useState<ChartType>(metadata.chartTypes[0]);
  const onChartSelected = (item: { key?: ChartType }) => {
    item?.key && setSelectedChartType(item.key);
  };

  const onChartPeriodSelected = (item: { key?: OverviewCardPeriod }) => {
    item?.key && onPeriodSelected && onPeriodSelected(item?.key);
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
      <OverviewCardLegend
        metadata={legendMetadata}
        values={legendData}
        loading={loading}
        wrappedInSmallScreen={metadata.wrappedInSmallScreen}
      />
      <div className={styles.chartControls}>
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
        {PERIODS.length > 1 && (
          <ButtonGroup
            className={styles.chartTypeSwitcher}
            size={ElementSize.SMALL}
            buttons={PERIODS.map((period: OverviewCardPeriod) => ({
              key: period,
              title: PERIOD_TITLES_BY_KEY[period],
            }))}
            setSelectedButton={onChartPeriodSelected}
          />
        )}
      </div>
      <ChartContainer
        data={chartData}
        chartType={selectedChartType}
        loading={loading}
        datasetInfo={chartMetadata}
        dataFormatType={metadata.numberType}
        lastDashedPeriod
      />
    </Card>
  );
}
