import { useContext, useMemo } from 'react';

import { OverviewChartCard } from 'components/OverviewChartCard';
import { useAggregatedDataByPeriod } from 'hooks/useAggregatedDataByPeriod';

import { useZoneOverviewDelegations } from './useZoneOverviewDelegations';
import { DELEGATIONS_CARD_METADATA } from './ZoneOverviewDelegations.metadata';
import styles from './ZoneOverviewDelegations.module.scss';
import { OverviewTokenContext } from '../OverviewTokenContextProvider';

import { ZoneOverviewDelegationsProps } from '.';

export function ZoneOverviewDelegations({ className }: ZoneOverviewDelegationsProps) {
  const { data, loading } = useZoneOverviewDelegations();

  const { loading: tokenLoading, data: tokenData } = useContext(OverviewTokenContext);

  // TODO: refactoring
  const metadata = useMemo(() => {
    const newMetadata = { ...DELEGATIONS_CARD_METADATA };
    newMetadata.dataset.delegated.valuePostfixComponent = <TokenValue symbol={tokenData?.symbol} />;
    newMetadata.dataset.undelegated.valuePostfixComponent = (
      <TokenValue symbol={tokenData?.symbol} />
    );

    return newMetadata;
  }, [tokenData?.symbol]);

  const chartData = useAggregatedDataByPeriod(
    data?.chart ?? [],
    DELEGATIONS_CARD_METADATA.chartKeys
  );

  return (
    <OverviewChartCard
      className={className}
      title="Delegations"
      data={data}
      chartData={chartData}
      loading={loading}
      metadata={metadata}
    />
  );
}

function TokenValue({ symbol }: { symbol?: string | null }) {
  return <span className={styles.additional}>&nbsp;{symbol}</span>;
}
