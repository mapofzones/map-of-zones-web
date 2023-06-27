import cn from 'classnames';

import { ActivityComparisonCard } from './ActivityComparisonCard';
import styles from './ComparisonPage.module.scss';
import { DailyActiveAddressesComparisonCard } from './DailyActiveAddressesComparisonCard';
import { useSelectedZonesDetails } from './hooks/useSelectedZonesDetails';
import { IbcTransfersComparisonCard } from './IbcTransfersComparisonCard';
import { IbcVolumeComparisonCard } from './IbcVolumeComparisonCard';
import { InfrastructureComparisonCard } from './InfrastructureComparisonCard';
import { InterchainComparisonCard } from './InterchainComparisonCard';
import { BlockchainParametersComparisonProvider } from './providers/BlockchainParametersComparisonProvider';
import { ReturnedAddressesComparisonCard } from './ReturnedAddressesComparisonCard';
import { SelectedZonesSyncWithSearchParams } from './SelectedZonesSyncWithSearchParams';
import { StakingComparisonCard } from './StakingComparisonCard';
import { TokenComparisonCard } from './TokenComparisonCard';
import { TokenSupplyComparisonCard } from './TokenSupplyComparisonCard';
import { TransactionsComparisonCard } from './TransactionsComparisonCard';
import { UniqueDelegatorsComparisonCard } from './UniqueDelegatorsComparisonCard';
import { ZonesComparisonSelectors } from './ZonesComparisonSelectors';

import { ComparisonPageProps } from '.';

function ComparisonPageContent({ className, ...props }: ComparisonPageProps) {
  const { selectedZones } = useSelectedZonesDetails();

  return (
    <div className={cn(className, styles.container)} {...props}>
      <div className={styles.header}>
        <div className={styles.title}>Comparison</div>
        <ZonesComparisonSelectors />
      </div>
      <ActivityComparisonCard className={styles.activityCard} />
      <InterchainComparisonCard className={styles.interchainCard} />
      <TokenComparisonCard className={styles.tokenCard} />
      <IbcVolumeComparisonCard className={styles.ibcVolumeCard} />
      {/* TODO: get rid of  BlockchainParametersComparisonProvider */}
      <BlockchainParametersComparisonProvider zones={selectedZones}>
        <TokenSupplyComparisonCard className={styles.tokenSupplyCard} />
        <StakingComparisonCard className={styles.stakingCard} />
        <InfrastructureComparisonCard className={styles.infrastructureCard} />
      </BlockchainParametersComparisonProvider>
      <TransactionsComparisonCard className={styles.transactionCard} />
      <IbcTransfersComparisonCard className={styles.transfersCard} />
      <DailyActiveAddressesComparisonCard className={styles.activeAddresses} />
      <ReturnedAddressesComparisonCard className={styles.returnedAddresses} />
      <UniqueDelegatorsComparisonCard className={styles.uniqueDelegators} />
    </div>
  );
}

export function ComparisonPage({ className, ...props }: ComparisonPageProps): JSX.Element {
  return (
    <SelectedZonesSyncWithSearchParams>
      <ComparisonPageContent className={className} {...props}></ComparisonPageContent>
    </SelectedZonesSyncWithSearchParams>
  );
}
