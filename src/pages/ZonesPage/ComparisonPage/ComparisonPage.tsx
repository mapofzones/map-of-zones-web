import cn from 'classnames';

import { ActivityComparisonCard } from './ActivityComparisonCard';
import styles from './ComparisonPage.module.scss';
import { DailyActiveAddressesComparisonCard } from './DailyActiveAddressesComparisonCard';
import { IbcTransfersComparisonCard } from './IbcTransfersComparisonCard';
import { IbcVolumeComparisonCard } from './IbcVolumeComparisonCard';
import { InfrastructureComparisonCard } from './InfrastructureComparisonCard';
import { InterchainComparisonCard } from './InterchainComparisonCard';
import { ReturnedAddressesComparisonCard } from './ReturnedAddressesComparisonCard';
import { SelectedZonesSyncWithSearchParams } from './SelectedZonesSyncWithSearchParams';
import { StakingComparisonCard } from './StakingComparisonCard';
import { TokenComparisonCard } from './TokenComparisonCard';
import { TokenSupplyComparisonCard } from './TokenSupplyComparisonCard';
import { TransactionsComparisonCard } from './TransactionsComparisonCard';
import { UniqueDelegatorsComparisonCard } from './UniqueDelegatorsComparisonCard';
import { ZonesComparisonSelectors } from './ZonesComparisonSelectors';

import { ComparisonPageProps } from '.';

export function ComparisonPage({ className, ...props }: ComparisonPageProps): JSX.Element {
  return (
    <SelectedZonesSyncWithSearchParams>
      <div className={cn(className, styles.container)} {...props}>
        <div className={styles.header}>
          <div className={styles.title}>Comparison</div>
          <ZonesComparisonSelectors />
        </div>
        <ActivityComparisonCard className={styles.activityCard} />
        <InterchainComparisonCard className={styles.interchainCard} />
        <TokenComparisonCard className={cn(styles.tokenCard, styles.chartCard)} />
        <IbcVolumeComparisonCard className={cn(styles.ibcVolumeCard, styles.chartCard)} />
        <TokenSupplyComparisonCard className={styles.tokenSupplyCard} />
        <StakingComparisonCard className={styles.stakingCard} />
        <InfrastructureComparisonCard className={styles.infrastructureCard} />
        <TransactionsComparisonCard className={cn(styles.transactionCard, styles.chartCard)} />
        <IbcTransfersComparisonCard className={cn(styles.transfersCard, styles.chartCard)} />
        <DailyActiveAddressesComparisonCard
          className={cn(styles.activeAddresses, styles.chartCard)}
        />
        <ReturnedAddressesComparisonCard
          className={cn(styles.returnedAddresses, styles.chartCard)}
        />
        <UniqueDelegatorsComparisonCard className={cn(styles.uniqueDelegators, styles.chartCard)} />
      </div>
    </SelectedZonesSyncWithSearchParams>
  );
}
