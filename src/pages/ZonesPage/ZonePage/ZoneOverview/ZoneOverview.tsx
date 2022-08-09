import styles from './ZoneOverview.module.scss';
import { ZoneOverviewActivity } from './ZoneOverviewActivity/ZoneOverviewActivity';
import { ZoneOverviewParameters } from './ZoneOverviewParameters/ZoneOverviewParameters';
import { ZoneOverviewToken } from './ZoneOverviewToken/ZoneOverviewToken';

export function ZoneOverview() {
  return (
    <div className={styles.container}>
      <ZoneOverviewToken className={styles.tokenBlock} />
      <ZoneOverviewActivity className={styles.activityBlock} />
      <ZoneOverviewParameters className={styles.parametersBlock} />
    </div>
  );
}
