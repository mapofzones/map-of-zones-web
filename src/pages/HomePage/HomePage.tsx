import { Button, Card } from '../../components';
import styles from './HomePage.module.scss';

function HomePage() {
  return (
    <div className={styles.pageContainer}>
      <div>MAP</div>
      <Card className={styles.sidebar}>
        <div className={styles.blockRow}>
          <span>168 Zones</span>
          <div>Search</div>
        </div>
        <div className={styles.blockRow}>
          <div>IBC Volume</div>
          <div>24h | 7d | 30d</div>
        </div>
        <Card className={styles.totalContainer}>
          <span className={styles.totalContainer_title}>Total IBC Volume (24h)</span>
          <span className={styles.totalContainer_value}>$226,150,297,401</span>
          <span className={styles.totalContainer_pending}>$1,984,546</span>
        </Card>
        <div className={styles.zonesInfoTable}>
          <div className={styles.tableRow}>
            <div className={styles.zoneLogo}></div>
            <span className={styles.zoneName}>Osmosis</span>
            <span className={styles.zoneValue}>$16,150,297,401</span>
            <span className={styles.zonePendingValue}>$74,546</span>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.zoneLogo}></div>
            <span className={styles.zoneName}>Injective</span>
            <span className={styles.zoneValue}>$5,273,986,485</span>
            <span className={styles.zonePendingValue}>$34,236</span>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.zoneLogo}></div>
            <span className={styles.zoneName}>Juno</span>
            <span className={styles.zoneValue}>$2,920,284,678</span>
            <span className={styles.zonePendingValue}>$14,465</span>
          </div>
        </div>
        <Button className={styles.detailedBtn}>Detailed View</Button>
      </Card>
    </div>
  );
}

export default HomePage;
