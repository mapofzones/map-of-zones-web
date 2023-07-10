import { Outlet } from 'react-router-dom';

import { ComparisonZonesFooter } from 'components/ComparisonZonesFooter';

import styles from './Layout.module.scss';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.body}>
        <Outlet />
      </div>

      <ComparisonZonesFooter />

      <Footer />
    </div>
  );
};

export default Layout;
