import { useState } from 'react';

import { AreaChartIcon, BarChartIcon } from 'assets/icons';
import {
  AnalysisCard,
  AnalysisChartTypeButtonsGroup,
  AnalysisPeriodButtonsGroup,
  AnalysisLegendAdditionalText,
} from 'components/AnalysisCard';
import { ChartContainer } from 'components/ChartContainer';
import { OverviewCardLegendWithMetadata } from 'components/OverviewChartCardWithMetadata/OverviewCardLegendWithMetadata';
import { useOverviewChartPeriodChangedAnalytics } from 'hooks/analytics/ZonesPage/ZonePage/ZoneOverviewPage/useOverviewChartPeriodChangedAnalytics';
import { AnalysisCardPeriod } from 'types/AnalysisCardPeriod';
import { ChartType } from 'types/ChartType';

import styles from './OverviewChartCardWithMetadata.module.scss';
import { DataWithChart, OverviewCardMetadata } from './OverviewChartCardWithMetadata.types';

import { OverviewChartCardProps } from '.';

export const CHART_ICONS = {
  [ChartType.AREA]: AreaChartIcon,
  [ChartType.BAR]: BarChartIcon,
};

const PERIODS: AnalysisCardPeriod[] = ['1w', '1m'];

export function OverviewChartCard<T extends DataWithChart<K>, K extends object>({
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

  const onChartPeriodSelected = (period: AnalysisCardPeriod) => {
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
    <AnalysisCard title={title} className={className}>
      {legendExist && (
        <>
          <OverviewCardLegendWithMetadata
            metadata={legendMetadata}
            values={legendData}
            loading={loading}
            wrappedInSmallScreen={metadata.wrappedInSmallScreen}
          />
          <AnalysisLegendAdditionalText period={period} />
        </>
      )}
      <div className={styles.chartControls}>
        {metadata.chartTypes.length > 1 && (
          <AnalysisChartTypeButtonsGroup
            chartTypes={metadata.chartTypes}
            onChartSelected={onChartSelected}
          />
        )}
        <AnalysisPeriodButtonsGroup periods={PERIODS} onPeriodSelected={onChartPeriodSelected} />
      </div>
      <ChartContainer
        data={chartData}
        chartType={selectedChartType}
        loading={loading}
        datasetInfo={chartMetadata}
        dataFormatType={metadata.numberType}
        lastDashedPeriod
      />
    </AnalysisCard>
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
