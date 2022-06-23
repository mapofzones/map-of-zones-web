import { Button, Card } from '../../components';
import styles from './HomePage.module.scss';
import { ZonesInfoTable } from './index';

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
        <ZonesInfoTable />
        <Button className={styles.detailedBtn}>Detailed View</Button>
      </Card>
    </div>
  );
}

export default HomePage;
