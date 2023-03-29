import { Outlet } from 'react-router-dom';

import { useTabletSmallMediaQuery } from 'hooks/useMediaQuery';

import styles from './HomePage.module.scss';
import MapContainer from './MapContainer/MapContainer';

// const MapContainer = React.lazy(() => import('./MapContainer/MapContainer'));

export function HomePage() {
  const isTableSmall = useTabletSmallMediaQuery();

  return (
    <div className={styles.pageContainer}>
      {!isTableSmall && <MapContainer className={styles.map} />}
      <Outlet />
    </div>
  );
}
