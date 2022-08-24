import { Outlet } from 'react-router-dom';

import styles from './ZonesPage.module.scss';

export function ZonesPage() {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
}
