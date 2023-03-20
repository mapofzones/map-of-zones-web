import { useContext, useState } from 'react';

import cn from 'classnames';

import { NumberFormat, NumberType, SkeletonTextWrapper } from 'components';
import { ChartContainer, ChartType } from 'components/ChartContainer';
import { OverviewCardPeriod } from 'components/OverviewChartCard';
import { OverviewChartLegend } from 'components/OverviewChartCard/Legend/OverviewChartLegend';
import { OverviewLegendItem } from 'components/OverviewChartCard/Legend/OverviewLegendItem';
import { OverviewLegendTitle } from 'components/OverviewChartCard/Legend/Title/OverviewLegendTitle';
import { LegendValueBase } from 'components/OverviewChartCard/Legend/Value/LegendValueBase';
import { ZoneOverviewCard } from 'components/OverviewChartCard/ZoneOverviewCard';
import { ZoneOverviewChartTypeButtonsGroup } from 'components/OverviewChartCard/ZoneOverviewChartTypeButtonsGroup';

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
    <ZoneOverviewCard title="Delegations">
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
    </ZoneOverviewCard>
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
