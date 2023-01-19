import { useContext, useMemo } from 'react';

import { OverviewChartCard } from 'components/OverviewChartCard';

import { OverviewTokenContext } from '../OverviewTokenContextProvider';
import { useZoneOverviewDelegations } from './useZoneOverviewDelegations';
import { DELEGATIONS_CARD_METADATA } from './ZoneOverviewDelegations.metadata';
import styles from './ZoneOverviewDelegations.module.scss';

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

  return (
    <OverviewChartCard
      className={className}
      title="Delegations"
      data={data}
      loading={loading}
      metadata={metadata}
    />
  );
}

function TokenValue({ symbol }: { symbol?: string | null }) {
  return <span className={styles.additional}>&nbsp;{symbol}</span>;
}
