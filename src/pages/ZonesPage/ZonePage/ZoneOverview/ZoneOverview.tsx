import cn from 'classnames';

import OverviewTokenContextProvider from './OverviewTokenContextProvider';
import styles from './ZoneOverview.module.scss';
import { ZoneOverviewActiveUsers } from './ZoneOverviewActiveUsers';
import { ZoneOverviewActivity } from './ZoneOverviewActivity/ZoneOverviewActivity';
import { ZoneOverviewIbcTransfers } from './ZoneOverviewIbcTransfers';
import { ZoneOverviewIbcVolume } from './ZoneOverviewIbcVolume';
import { ZoneOverviewInterchain } from './ZoneOverviewInterchain';
import { ZoneOverviewParameters } from './ZoneOverviewParameters/ZoneOverviewParameters';
import { ZoneOverviewReturnedAddresses } from './ZoneOverviewReturnedAddresses';
import { ZoneOverviewToken } from './ZoneOverviewToken/ZoneOverviewToken';
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
        <ZoneOverviewToken className={styles.tokenBlock} />
        <ZoneOverviewIbcVolume className={cn(styles.volumesBlock, styles.chartCard)} />
        <ZoneOverviewParameters className={styles.parametersBlock} />
        <ZoneOverviewTransactions className={cn(styles.chartCard, styles.transactionsBlock)} />
        <ZoneOverviewIbcTransfers className={cn(styles.ibcTransfersBlock, styles.chartCard)} />
        <ZoneOverviewActiveUsers className={cn(styles.activeUsersBlock, styles.chartCard)} />
        <ZoneOverviewReturnedAddresses
          className={cn(styles.returnedAddressesBlock, styles.chartCard)}
        />
        <ZoneOverviewUniqueDelegates className={cn(styles.delegatesBlock, styles.chartCard)} />
      </div>
    </OverviewTokenContextProvider>
  );
}
