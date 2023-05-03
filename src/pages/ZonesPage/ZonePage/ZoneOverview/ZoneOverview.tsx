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
        <ZoneOverviewIbcVolume className={styles.volumesBlock} />
        <ZoneOverviewParameters className={styles.parametersBlock} />
        <ZoneOverviewTransactions className={styles.transactionsBlock} />
        <ZoneOverviewIbcTransfers className={styles.ibcTransfersBlock} />
        <ZoneOverviewActiveUsers className={styles.activeUsersBlock} />
        <ZoneOverviewReturnedAddresses className={styles.returnedAddressesBlock} />
        <ZoneOverviewUniqueDelegates className={styles.delegatesBlock} />
      </div>
    </OverviewTokenContextProvider>
  );
}
