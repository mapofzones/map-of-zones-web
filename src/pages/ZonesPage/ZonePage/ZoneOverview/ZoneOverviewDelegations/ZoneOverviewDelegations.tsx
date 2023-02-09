import { useContext, useMemo, useState } from 'react';

import cn from 'classnames';

import { NumberFormat, NumberType } from 'components';
import { ChartContainer, ChartType } from 'components/ChartContainer';
import { OverviewChartCard } from 'components/OverviewChartCard';
import { OverviewChartLegend } from 'components/OverviewChartCard/Legend/OverviewChartLegend';
import { OverviewLegendItem } from 'components/OverviewChartCard/Legend/OverviewLegendItem';
import { OverviewLegendTitle } from 'components/OverviewChartCard/Legend/Title/OverviewLegendTitle';
import { LegendNumberValue } from 'components/OverviewChartCard/Legend/Value/LegendNumberValue';
import { LegendValueBase } from 'components/OverviewChartCard/Legend/Value/LegendValueBase';
import { ZoneOverviewCard } from 'components/OverviewChartCard/ZoneOverviewCard';
import { ZoneOverviewChartTypeButtonsGroup } from 'components/OverviewChartCard/ZoneOverviewChartTypeButtonsGroup';
import { useAggregatedDataByPeriod } from 'hooks/useAggregatedDataByPeriod';

import { OverviewTokenContext } from '../OverviewTokenContextProvider';
import { useZoneOverviewDelegations } from './useZoneOverviewDelegations';
import { DELEGATIONS_CARD_METADATA } from './ZoneOverviewDelegations.metadata';
import styles from './ZoneOverviewDelegations.module.scss';

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
  const { data, loading } = useZoneOverviewDelegations();

  const { loading: tokenLoading, data: tokenData } = useContext(OverviewTokenContext);

  const [selectedChartType, setSelectedChartType] = useState<ChartType>(
    DELEGATIONS_CARD_METADATA.chartTypes[0]
  );

  const onChartSelected = (item: { key?: ChartType }) => {
    item?.key && setSelectedChartType(item.key);
  };

  const chartData = useAggregatedDataByPeriod(
    data?.chart ?? [],
    DELEGATIONS_CARD_METADATA.chartKeys
  );

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
          <TokenLegendValue value={data?.totalDelegated} symbol={tokenData?.symbol} />
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
        data={chartData}
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
