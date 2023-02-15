import { useContext, useMemo, useState } from 'react';

import { OverviewCardPeriod, OverviewChartCard } from 'components/OverviewChartCard';
import { useAggregatedDataByPeriod } from 'hooks/useAggregatedDataByPeriod';

import { OverviewTokenContext } from '../OverviewTokenContextProvider';
import { useZoneOverviewDelegations } from './useZoneOverviewDelegations';
import { DELEGATIONS_CARD_METADATA } from './ZoneOverviewDelegations.metadata';
import styles from './ZoneOverviewDelegations.module.scss';

import { ZoneOverviewDelegationsProps } from '.';

export function ZoneOverviewDelegations({ className }: ZoneOverviewDelegationsProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<OverviewCardPeriod>('1w');

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
    selectedPeriod,
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
      onPeriodSelected={(key) => setSelectedPeriod(key)}
    />
  );
}

function TokenValue({ symbol }: { symbol?: string | null }) {
  return <span className={styles.additional}>&nbsp;{symbol}</span>;
}
