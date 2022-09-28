import { Outlet } from 'react-router-dom';

import { useTabletSmallMediaQuery } from 'hooks/useMediaQuery';

import styles from './HomePage.module.scss';
import { Map } from './Map/Map';

export function HomePage() {
  const isTableSmall = useTabletSmallMediaQuery();

  return (
    <div className={styles.pageContainer}>
      {!isTableSmall && <Map className={styles.map} />}
      <Outlet />
    </div>
  );
}
