import { Outlet, Route, Routes } from 'react-router-dom';

import { Card } from 'components';

import styles from './Sidebar.module.scss';
import { ZonesSidebar } from './ZonesSidebar/ZonesSidebar';

function Sidebar() {
  return (
    <Card className={styles.container}>
      <Outlet />
    </Card>
  );
}

export { Sidebar };
