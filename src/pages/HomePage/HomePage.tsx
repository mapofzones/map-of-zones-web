import { Outlet } from 'react-router-dom';

import styles from './HomePage.module.scss';
import { Map } from './Map/Map';

export function HomePage() {
  return (
    <div className={styles.pageContainer}>
      <Map />
      <Outlet />
    </div>
  );
}
