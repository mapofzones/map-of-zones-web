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
        chartTypes={metadata.chartTypes}
        onChartSelected={onChartSelected}
      />

      <OverviewChartLegend className={cn(styles.chartLegend, styles.wrapped)}>
        <OverviewLegendItem className={styles.legendItem}>
          <OverviewLegendTitle
            title={metadata.dataset.delegated.title}
            circleColor={metadata.dataset.delegated.color}
            showPeriod={metadata.dataset.delegated.showPeriod}
            tooltipText={metadata.dataset.delegated.tooltipText}
          />
          <LegendValueBase>
            <NumberFormat value={data?.totalDelegated} numberType={NumberType.Number} />
            <span className={styles.additional}>&nbsp;{tokenData?.symbol}</span>
          </LegendValueBase>
        </OverviewLegendItem>

        <OverviewLegendItem className={styles.legendItem}>
          <OverviewLegendTitle
            title={metadata.dataset.undelegated.title}
            circleColor={metadata.dataset.undelegated.color}
            showPeriod={metadata.dataset.undelegated.showPeriod}
            tooltipText={metadata.dataset.undelegated.tooltipText}
          />

          <LegendValueBase>
            <NumberFormat value={data?.totalUndelegated} numberType={NumberType.Number} />
            <span className={styles.additional}>&nbsp;{tokenData?.symbol}</span>
          </LegendValueBase>
        </OverviewLegendItem>
      </OverviewChartLegend>

      <ChartContainer
        chartType={selectedChartType}
        data={chartData}
        loading={loading}
        datasetInfo={metadata.dataset}
        dataFormatType={NumberType.Currency}
      />
    </ZoneOverviewCard>
  );
}

function TokenValue({ symbol }: { symbol?: string | null }) {
  return <span className={styles.additional}>&nbsp;{symbol}</span>;
}
