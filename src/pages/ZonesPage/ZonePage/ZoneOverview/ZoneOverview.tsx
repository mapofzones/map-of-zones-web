import { ZoneOverviewIbcVolume } from '../ZoneOverviewIbcVolume';
import styles from './ZoneOverview.module.scss';
import { ZoneOverviewActiveUsers } from './ZoneOverviewActiveUsers';
import { ZoneOverviewDelegations } from './ZoneOverviewDelegations';
import { ZoneOverviewIbcTransfers } from './ZoneOverviewIbcTransfers';
import { ZoneOverviewParameters } from './ZoneOverviewParameters/ZoneOverviewParameters';
import { ZoneOverviewToken } from './ZoneOverviewToken/ZoneOverviewToken';
import { ZoneOverviewTransactions } from './ZoneOverviewTransactions';

export function ZoneOverview() {
  return (
    <div className={styles.container}>
      <ZoneOverviewToken className={styles.tokenBlock} />
      <ZoneOverviewIbcVolume className={styles.activityBlock} />
      <ZoneOverviewParameters className={styles.parametersBlock} />
      <ZoneOverviewTransactions className={styles.transactionsBlock} />
      <ZoneOverviewIbcTransfers className={styles.ibcTransfersBlock} />
      <ZoneOverviewActiveUsers className={styles.activeUsersBlock} />
      <ZoneOverviewDelegations className={styles.delegationsBlock} />
    </div>
  );
}
