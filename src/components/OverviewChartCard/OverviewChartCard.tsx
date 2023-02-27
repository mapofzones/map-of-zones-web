import { useState } from 'react';

import cn from 'classnames';
import moment from 'moment';

import { AreaChartIcon, BarChartIcon } from 'assets/icons';
import { ChartContainer, ChartType } from 'components/ChartContainer';
import { OverviewCardLegend } from 'components/OverviewCardLegend';
import { ButtonGroup, Card } from 'components/ui';
import { ElementSize } from 'types/ElementSize';

import styles from './OverviewChartCard.module.scss';
import { DataWithChart, OverviewCardMetadata } from './OverviewChartCard.types';

import { OverviewCardPeriod, OverviewChartCardProps, OVERVIEW_PERIODS_IN_HOURS_BY_KEY } from '.';

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
  period = '1w',
  onPeriodSelected,
}: OverviewChartCardProps<T, K>) {
  const [selectedChartType, setSelectedChartType] = useState<ChartType>(metadata.chartTypes[0]);
  const onChartSelected = (item: { key?: ChartType }) => {
    item?.key && setSelectedChartType(item.key);
  };

  const onChartPeriodSelected = (item: { key?: OverviewCardPeriod }) => {
    item?.key && onPeriodSelected && onPeriodSelected(item?.key);
  };

  const legendMetadata = rebuildLegendMetadataByLegendKey<T, K>(metadata);

  const legendExist = Object.keys(legendMetadata).length > 0;

  const legendData = legendExist ? rebuildLegendDataByLegendKey<T, K>(metadata, data) : undefined;

  const chartMetadata = rebuildChartMetadataByChartKey<T, K>(metadata);

  const endPeriodFormatted = moment().utc().format('DD MMM');
  const beginPeriodFormatted = moment()
    .utc()
    .subtract(OVERVIEW_PERIODS_IN_HOURS_BY_KEY[period] / 24, 'days')
    .format('DD MMM');

  return (
    <Card title={title} className={cn(styles.wrapper, className)}>
      {legendExist && (
        <>
          <OverviewCardLegend
            metadata={legendMetadata}
            values={legendData}
            loading={loading}
            wrappedInSmallScreen={metadata.wrappedInSmallScreen}
          />
          <span className={styles.additionalText}>
            Aggregated value from {beginPeriodFormatted} to {endPeriodFormatted} (UTC)
          </span>
        </>
      )}
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
function rebuildChartMetadataByChartKey<T extends DataWithChart<K>, K>(
  metadata: OverviewCardMetadata<T, K>
) {
  return Object.keys(metadata.dataset).reduce((acc: any, key: string) => {
    const dataset = metadata.dataset[key];
    if (dataset.chartValueAccessorKey) {
      acc[dataset.chartValueAccessorKey] = {
        title: dataset.title,
        color: dataset.color,
      };
    }

    return acc;
  }, {});
}

function rebuildLegendMetadataByLegendKey<T extends DataWithChart<K>, K>(
  metadata: OverviewCardMetadata<T, K>
) {
  return Object.keys(metadata.dataset).reduce((acc: any, key: string) => {
    const dataset = metadata.dataset[key];
    if (dataset.legendValueAccessorKey) {
      acc[dataset.legendValueAccessorKey] = dataset;
    }
    return acc;
  }, {});
}

function rebuildLegendDataByLegendKey<T extends DataWithChart<K>, K>(
  metadata: OverviewCardMetadata<T, K>,
  data: T | undefined
) {
  return Object.keys(metadata.dataset).reduce((acc: any, key: string) => {
    const dataset = metadata.dataset[key];
    if (dataset.legendValueAccessorKey) {
      acc[dataset.legendValueAccessorKey] = data ? data[dataset.legendValueAccessorKey] : undefined;
    }
    return acc;
  }, {});
}
