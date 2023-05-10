import { Outlet } from 'react-router-dom';

import { Card } from 'ui';

import styles from './Sidebar.module.scss';

function Sidebar() {
  return (
    <Card className={styles.container}>
      <Outlet />
    </Card>
  );
}

export { Sidebar };
