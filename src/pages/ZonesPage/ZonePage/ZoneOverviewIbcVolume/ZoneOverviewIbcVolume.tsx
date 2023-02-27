import { useState } from 'react';

import cn from 'classnames';

import { NumberType, SkeletonTextWrapper } from 'components';
import { ChartContainer, ChartType } from 'components/ChartContainer';
import { OverviewCardPeriod } from 'components/OverviewChartCard';
import { OverviewChartLegend } from 'components/OverviewChartCard/Legend/OverviewChartLegend';
import { OverviewLegendItem } from 'components/OverviewChartCard/Legend/OverviewLegendItem';
import { OverviewLegendTitle } from 'components/OverviewChartCard/Legend/Title/OverviewLegendTitle';
import { LegendNumberValue } from 'components/OverviewChartCard/Legend/Value/LegendNumberValue';
import { OverviewPeriodButtonsGroup } from 'components/OverviewChartCard/OverviewPeriodButtonsGroup';
import { ZoneOverviewCard } from 'components/OverviewChartCard/ZoneOverviewCard';
import { ZoneOverviewChartTypeButtonsGroup } from 'components/OverviewChartCard/ZoneOverviewChartTypeButtonsGroup';

import { useZoneOverviewIbcVolumeCard } from './useZoneOverviewIbcVolumeCard';
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
const VOLUME_PERIODS: OverviewCardPeriod[] = ['1w', '1m'];

export function ZoneOverviewIbcVolume({ className }: ZoneOverviewIbcVolumeProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<OverviewCardPeriod>('1w');
  const { data, loading } = useZoneOverviewIbcVolumeCard(selectedPeriod);

  const [selectedChartType, setSelectedChartType] = useState<ChartType>(ChartType.AREA);

  const onChartSelected = (item: { key?: ChartType }) => {
    item?.key && setSelectedChartType(item.key);
  };

  const onPeriodSelected = (period: OverviewCardPeriod) => {
    setSelectedPeriod(period);
  };

  return (
    <ZoneOverviewCard title="IBC Volume" className={className}>
      <OverviewChartLegend className={cn(styles.chartLegend, styles.wrapped)}>
        <OverviewLegendItem className={styles.legendItem}>
          <OverviewLegendTitle
            title={CHART_METADATA.total.title}
            circleColor={CHART_METADATA.total.color}
            showPeriod
            tooltipText="Total IBC tooltip"
          />
          <SkeletonTextWrapper loading={loading} defaultText={'$13 952 000'}>
            <LegendNumberValue value={data?.totalIbc} numberType={numberType} />
          </SkeletonTextWrapper>
        </OverviewLegendItem>

        <OverviewLegendItem className={styles.legendItem}>
          <OverviewLegendTitle
            title={CHART_METADATA.ibcIn.title}
            circleColor={CHART_METADATA.ibcIn.color}
            tooltipText="Total In tooltip"
          />
          <SkeletonTextWrapper loading={loading} defaultText={'$13 952 000'}>
            <LegendNumberValue value={data?.totalIbcIn} numberType={numberType} />
          </SkeletonTextWrapper>
        </OverviewLegendItem>

        <OverviewLegendItem className={styles.legendItem}>
          <OverviewLegendTitle
            title={CHART_METADATA.ibcOut.title}
            circleColor={CHART_METADATA.ibcOut.color}
            tooltipText="Total Out tooltip"
          />
          <SkeletonTextWrapper loading={loading} defaultText={'$13 952 000'}>
            <LegendNumberValue value={data?.totalIbcOut} numberType={numberType} />
          </SkeletonTextWrapper>
        </OverviewLegendItem>
      </OverviewChartLegend>

      <div className={styles.chartControls}>
        <ZoneOverviewChartTypeButtonsGroup
          chartTypes={[ChartType.AREA, ChartType.BAR]}
          onChartSelected={onChartSelected}
        />

        <OverviewPeriodButtonsGroup periods={VOLUME_PERIODS} onPeriodSelected={onPeriodSelected} />
      </div>

      <ChartContainer
        chartType={selectedChartType}
        data={data?.chart ?? []}
        loading={loading}
        datasetInfo={CHART_METADATA}
        dataFormatType={numberType}
        // period={selectedPeriod}
      />
    </ZoneOverviewCard>
  );
}
