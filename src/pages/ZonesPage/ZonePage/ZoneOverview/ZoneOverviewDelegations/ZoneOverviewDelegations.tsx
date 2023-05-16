import { useContext, useState } from 'react';

import cn from 'classnames';

import { ChartContainer, ChartType } from 'components/ChartContainer';
import { OverviewCard, ZoneOverviewChartTypeButtonsGroup } from 'components/OverviewCard';
import { OverviewCardPeriod } from 'components/OverviewChartCardWithMetadata';
import { OverviewChartLegend } from 'components/OverviewChartCardWithMetadata/Legend/OverviewChartLegend';
import { OverviewLegendItem } from 'components/OverviewChartCardWithMetadata/Legend/OverviewLegendItem';
import { OverviewLegendTitle } from 'components/OverviewChartCardWithMetadata/Legend/Title/OverviewLegendTitle';
import { LegendValueBase } from 'components/OverviewChartCardWithMetadata/Legend/Value/LegendValueBase';
import { NumberFormat, NumberType, SkeletonTextWrapper } from 'ui';

import { useZoneOverviewDelegations } from './useZoneOverviewDelegations';
import styles from './ZoneOverviewDelegations.module.scss';
import { OverviewTokenContext } from '../OverviewTokenContextProvider';

import { ZoneOverviewDelegationsProps } from '.';

const CHART_METADATA = {
  delegationAmount: {
    title: 'Delegated',
    color: '#22AAFF',
  },
  undelegationAmount: {
    title: 'Un-Delegated',
    color: '#FF4455',
  },
};

export function ZoneOverviewDelegations({ className }: ZoneOverviewDelegationsProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<OverviewCardPeriod>('1w');

  const { data, loading } = useZoneOverviewDelegations(selectedPeriod);

  const { loading: tokenLoading, data: tokenData } = useContext(OverviewTokenContext);

  const [selectedChartType, setSelectedChartType] = useState<ChartType>(ChartType.AREA);

  const onChartSelected = (item: { key?: ChartType }) => {
    item?.key && setSelectedChartType(item.key);
  };

  return (
    <OverviewCard title="Delegations">
      <ZoneOverviewChartTypeButtonsGroup
        chartTypes={[ChartType.AREA, ChartType.BAR]}
        onChartSelected={onChartSelected}
      />

      <OverviewChartLegend className={cn(styles.chartLegend, styles.wrapped)}>
        <OverviewLegendItem className={styles.legendItem}>
          <OverviewLegendTitle
            title={CHART_METADATA.delegationAmount.title}
            circleColor={CHART_METADATA.delegationAmount.color}
            showPeriod
            tooltipText="Delegated tooltip"
          />
          <SkeletonTextWrapper loading={loading} defaultText={'13 952 000'}>
            <TokenLegendValue value={data?.totalDelegated} symbol={tokenData?.symbol} />
          </SkeletonTextWrapper>
        </OverviewLegendItem>

        <OverviewLegendItem className={styles.legendItem}>
          <OverviewLegendTitle
            title={CHART_METADATA.undelegationAmount.title}
            circleColor={CHART_METADATA.undelegationAmount.color}
            tooltipText="Un-Delegated tooltip"
          />
          <TokenLegendValue value={data?.totalUndelegated} symbol={tokenData?.symbol} />
        </OverviewLegendItem>
      </OverviewChartLegend>

      <ChartContainer
        chartType={selectedChartType}
        data={data?.chart ?? []}
        loading={loading}
        datasetInfo={CHART_METADATA}
        dataFormatType={NumberType.Currency}
      />
    </OverviewCard>
  );
}

function TokenLegendValue({
  value,
  symbol,
}: {
  value: number | undefined;
  symbol?: string | null;
}) {
  return (
    <LegendValueBase>
      <NumberFormat value={value} numberType={NumberType.Number} />
      <span className={styles.additional}>&nbsp;{symbol}</span>
    </LegendValueBase>
  );
}
