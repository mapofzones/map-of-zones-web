import { Outlet } from 'react-router-dom';

import styles from './HomePage.module.scss';

function HomePage() {
  return (
    <div className={styles.pageContainer}>
      <div>MAP</div>
      <Outlet />
    </div>
  );
}

export { HomePage };
