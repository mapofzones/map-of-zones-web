import { ReactNode, useState } from 'react';

import cn from 'classnames';

import { ButtonGroup, Card, NumberType } from 'components';
import { ChartContainer, ChartType } from 'components/ChartContainer';
import { OverviewChartLegend } from 'components/OverviewChartCard/Legend/OverviewChartLegend';
import { OverviewLegendItem } from 'components/OverviewChartCard/Legend/OverviewLegendItem';
import { OverviewLegendTitle } from 'components/OverviewChartCard/Legend/Title/OverviewLegendTitle';
import { LegendNumberValue } from 'components/OverviewChartCard/Legend/Value/LegendNumberValue';
import { ZoneOverviewCard } from 'components/OverviewChartCard/ZoneOverviewCard';
import { ZoneOverviewChartTypeButtonsGroup } from 'components/OverviewChartCard/ZoneOverviewChartTypeButtonsGroup';
import { useAggregatedDataByPeriod } from 'hooks/useAggregatedDataByPeriod';

import { useZoneOverviewIbcVolumeCard } from './useZoneOverviewIbcVolumeCard';
import { VOLUME_CARD_METADATA } from './ZoneOverviewIbcVolume.metadata';
import styles from './ZoneOverviewIbcVolume.module.scss';

import { ZoneOverviewIbcVolumeProps } from '.';

const CHART_METADATA = {
  total: {
    title: 'Total IBC',
    color: '#BFBFC3',
  },
  ibcIn: {
    title: 'IBC In',
    color: '#22AAFF',
  },
  ibcOut: {
    title: 'IBC Out',
    color: '#EE11CC',
  },
};
const numberType = NumberType.Currency;

export function ZoneOverviewIbcVolume({ className }: ZoneOverviewIbcVolumeProps) {
  const [selectedChartType, setSelectedChartType] = useState<ChartType>(ChartType.AREA);

  const onChartSelected = (item: { key?: ChartType }) => {
    item?.key && setSelectedChartType(item.key);
  };

  const { data, loading } = useZoneOverviewIbcVolumeCard();
  const flatData = useAggregatedDataByPeriod(data?.chart ?? [], VOLUME_CARD_METADATA.chartKeys);

  return (
    <ZoneOverviewCard title="IBC Volume" className={className}>
      <ZoneOverviewChartTypeButtonsGroup
        chartTypes={[ChartType.AREA, ChartType.BAR]}
        onChartSelected={onChartSelected}
      />

      <OverviewChartLegend className={cn(styles.chartLegend, styles.wrapped)}>
        <OverviewLegendItem className={styles.legendItem}>
          <OverviewLegendTitle
            title={CHART_METADATA.total.title}
            circleColor={CHART_METADATA.total.color}
            showPeriod
            tooltipText="Total IBC"
          />
          <LegendNumberValue value={data?.totalIbc} numberType={numberType} />
        </OverviewLegendItem>

        <OverviewLegendItem className={styles.legendItem}>
          <OverviewLegendTitle
            title={CHART_METADATA.ibcIn.title}
            circleColor={CHART_METADATA.ibcIn.color}
            tooltipText="Total In"
          />
          <LegendNumberValue value={data?.totalIbcIn} numberType={numberType} />
        </OverviewLegendItem>

        <OverviewLegendItem className={styles.legendItem}>
          <OverviewLegendTitle
            title={CHART_METADATA.ibcOut.title}
            circleColor={CHART_METADATA.ibcOut.color}
            tooltipText="Total Out"
          />
          <LegendNumberValue value={data?.totalIbcOut} numberType={numberType} />
        </OverviewLegendItem>
      </OverviewChartLegend>

      <ChartContainer
        chartType={selectedChartType}
        data={flatData}
        loading={loading}
        datasetInfo={CHART_METADATA}
        dataFormatType={numberType}
      />
    </ZoneOverviewCard>
  );
}
