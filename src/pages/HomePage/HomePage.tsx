import { Outlet } from 'react-router-dom';

import { useShowMap } from 'hooks/useShowMap';

import styles from './HomePage.module.scss';
import MapContainer from './MapContainer/MapContainer';

export function HomePage() {
  const showMap = useShowMap();

  return (
    <div className={styles.pageContainer}>
      {showMap && <MapContainer className={styles.map} />}
      <Outlet />
    </div>
  );
}
