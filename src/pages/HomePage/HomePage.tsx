import { Route, Routes } from 'react-router-dom';

import styles from './HomePage.module.scss';
import { ZoneDetailsSidebar } from './Sidebar/ZoneDetailsSidebar/ZoneDetailsSidebar';
import { ZonesSidebar } from './Sidebar/ZonesSidebar/ZonesSidebar';

import { Sidebar } from './index';

function HomePage() {
  return (
    <div className={styles.pageContainer}>
      <div>MAP</div>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<ZonesSidebar />} />
          <Route path="zone" element={<ZoneDetailsSidebar />} />
        </Route>
      </Routes>
    </div>
  );
}

export default HomePage;
