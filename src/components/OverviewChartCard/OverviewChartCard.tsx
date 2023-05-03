import { useState } from 'react';

import { AreaChartIcon, BarChartIcon } from 'assets/icons';
import { ChartContainer, ChartType } from 'components/ChartContainer';
import { OverviewCardLegend } from 'components/OverviewCardLegend';
import { useOverviewChartPeriodChangedAnalytics } from 'hooks/analytics/ZonesPage/ZonePage/ZoneOverviewPage/useOverviewChartPeriodChangedAnalytics';

import styles from './OverviewChartCard.module.scss';
import { DataWithChart, OverviewCardMetadata } from './OverviewChartCard.types';
import { OverviewLegendAdditionalText } from './OverviewLegendAdditionalText';
import { OverviewPeriodButtonsGroup } from './OverviewPeriodButtonsGroup';
import { ZoneOverviewCard } from './ZoneOverviewCard';
import { ZoneOverviewChartTypeButtonsGroup } from './ZoneOverviewChartTypeButtonsGroup';

import { OverviewCardPeriod, OverviewChartCardProps } from '.';

export const CHART_ICONS = {
  [ChartType.AREA]: AreaChartIcon,
  [ChartType.BAR]: BarChartIcon,
};

const PERIODS: OverviewCardPeriod[] = ['1w', '1m'];

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
  const trackChartPeriodChangedEvent = useOverviewChartPeriodChangedAnalytics(title);

  const onChartSelected = (item: { key?: ChartType }) => {
    item?.key && setSelectedChartType(item.key);
  };

  const onChartPeriodSelected = (period: OverviewCardPeriod) => {
    if (onPeriodSelected) {
      onPeriodSelected(period);
      trackChartPeriodChangedEvent(period);
    }
  };

  const legendMetadata = rebuildLegendMetadataByLegendKey<T, K>(metadata);

  const legendExist = Object.keys(legendMetadata).length > 0;

  const legendData = legendExist ? rebuildLegendDataByLegendKey<T, K>(metadata, data) : undefined;

  const chartMetadata = rebuildChartMetadataByChartKey<T, K>(metadata);

  return (
    <ZoneOverviewCard title={title} className={className}>
      {legendExist && (
        <>
          <OverviewCardLegend
            metadata={legendMetadata}
            values={legendData}
            loading={loading}
            wrappedInSmallScreen={metadata.wrappedInSmallScreen}
          />
          <OverviewLegendAdditionalText period={period} />
        </>
      )}
      <div className={styles.chartControls}>
        {metadata.chartTypes.length > 1 && (
          <ZoneOverviewChartTypeButtonsGroup
            chartTypes={metadata.chartTypes}
            onChartSelected={onChartSelected}
          />
        )}
        <OverviewPeriodButtonsGroup periods={PERIODS} onPeriodSelected={onChartPeriodSelected} />
      </div>
      <ChartContainer
        data={chartData}
        chartType={selectedChartType}
        loading={loading}
        datasetInfo={chartMetadata}
        dataFormatType={metadata.numberType}
        lastDashedPeriod
      />
    </ZoneOverviewCard>
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
