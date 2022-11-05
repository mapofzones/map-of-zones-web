import { Logo, MaintenanceIcon } from 'assets/icons';

import styles from './MaintenancePage.module.scss';

export function MaintenancePage() {
  return (
    <div className={styles.wrapper}>
      <Logo className={styles.logo} />
      <div className={styles.maintenanceInfo}>
        <MaintenanceIcon />
        <div className={styles.mainTitle}>Our website is currently under maintenance.</div>
        <div className={styles.additionalTitle}>Sorry for any inconvenience.</div>
      </div>
    </div>
  );
}
