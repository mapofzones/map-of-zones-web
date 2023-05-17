import { useContext, useState } from 'react';

import cn from 'classnames';

import {
  AnalysisCard,
  AnalysisChartTypeButtonsGroup,
  AnalysisCardLegend,
  AnalysisLegendItem,
  AnalysisLegendTitle,
  LegendValueBase,
} from 'components/AnalysisCard';
import { ChartContainer, ChartType } from 'components/ChartContainer';
import { AnalysisCardPeriod } from 'types/AnalysisCardPeriod';
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
  const [selectedPeriod, setSelectedPeriod] = useState<AnalysisCardPeriod>('1w');

  const { data, loading } = useZoneOverviewDelegations(selectedPeriod);

  const { loading: tokenLoading, data: tokenData } = useContext(OverviewTokenContext);

  const [selectedChartType, setSelectedChartType] = useState<ChartType>(ChartType.AREA);

  const onChartSelected = (item: { key?: ChartType }) => {
    item?.key && setSelectedChartType(item.key);
  };

  return (
    <AnalysisCard title="Delegations">
      <AnalysisChartTypeButtonsGroup
        chartTypes={[ChartType.AREA, ChartType.BAR]}
        onChartSelected={onChartSelected}
      />

      <AnalysisCardLegend className={cn(styles.chartLegend, styles.wrapped)}>
        <AnalysisLegendItem className={styles.legendItem}>
          <AnalysisLegendTitle
            title={CHART_METADATA.delegationAmount.title}
            circleColor={CHART_METADATA.delegationAmount.color}
            showPeriod
            tooltipText="Delegated tooltip"
          />
          <SkeletonTextWrapper loading={loading} defaultText={'13 952 000'}>
            <TokenLegendValue value={data?.totalDelegated} symbol={tokenData?.symbol} />
          </SkeletonTextWrapper>
        </AnalysisLegendItem>

        <AnalysisLegendItem className={styles.legendItem}>
          <AnalysisLegendTitle
            title={CHART_METADATA.undelegationAmount.title}
            circleColor={CHART_METADATA.undelegationAmount.color}
            tooltipText="Un-Delegated tooltip"
          />
          <TokenLegendValue value={data?.totalUndelegated} symbol={tokenData?.symbol} />
        </AnalysisLegendItem>
      </AnalysisCardLegend>

      <ChartContainer
        chartType={selectedChartType}
        data={data?.chart ?? []}
        loading={loading}
        datasetInfo={CHART_METADATA}
        dataFormatType={NumberType.Currency}
      />
    </AnalysisCard>
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
