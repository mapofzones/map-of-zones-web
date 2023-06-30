import cn from 'classnames';

import OverviewTokenContextProvider from './OverviewTokenContextProvider';
import styles from './ZoneOverview.module.scss';
import { ZoneOverviewActiveUsers } from './ZoneOverviewActiveUsers';
import { ZoneOverviewActivity } from './ZoneOverviewActivity/ZoneOverviewActivity';
import { ZoneOverviewIbcTransfers } from './ZoneOverviewIbcTransfers';
import { ZoneOverviewIbcVolume } from './ZoneOverviewIbcVolume';
import { ZoneOverviewInfrastructureCard } from './ZoneOverviewInfrastructureCard';
import { ZoneOverviewInterchain } from './ZoneOverviewInterchain';
import { ZoneOverviewReturnedAddresses } from './ZoneOverviewReturnedAddresses';
import { ZoneOverviewStakingCard } from './ZoneOverviewStakingCard';
import { ZoneOverviewToken } from './ZoneOverviewToken/ZoneOverviewToken';
import { ZoneOverviewTokenSupplyCard } from './ZoneOverviewTokenSupplyCard';
import { ZoneOverviewTransactions } from './ZoneOverviewTransactions';
import { ZoneOverviewUniqueDelegates } from './ZoneOverviewUniqueDelegates';

export function ZoneOverview() {
  return (
    <OverviewTokenContextProvider>
      <div className={styles.container}>
        <div className={styles.overview}>
          <ZoneOverviewActivity className={styles.activityBlock} />
          <ZoneOverviewInterchain className={styles.interchainBlock} />
        </div>
        <ZoneOverviewToken className={cn(styles.card, styles.tokenBlock, styles.chartCard)} />
        <ZoneOverviewIbcVolume className={cn(styles.card, styles.volumesBlock, styles.chartCard)} />
        <ZoneOverviewTokenSupplyCard className={cn(styles.card, styles.tokenSupplyCard)} />
        <ZoneOverviewStakingCard className={cn(styles.card, styles.stakingCard)} />
        <ZoneOverviewInfrastructureCard className={cn(styles.card, styles.infrastructureCard)} />
        <ZoneOverviewTransactions
          className={cn(styles.card, styles.chartCard, styles.transactionsBlock)}
        />
        <ZoneOverviewIbcTransfers
          className={cn(styles.card, styles.ibcTransfersBlock, styles.chartCard)}
        />
        <ZoneOverviewActiveUsers
          className={cn(styles.card, styles.activeUsersBlock, styles.chartCard)}
        />
        <ZoneOverviewReturnedAddresses
          className={cn(styles.card, styles.returnedAddressesBlock, styles.chartCard)}
        />
        <ZoneOverviewUniqueDelegates
          className={cn(styles.card, styles.delegatesBlock, styles.chartCard)}
        />
      </div>
    </OverviewTokenContextProvider>
  );
}
