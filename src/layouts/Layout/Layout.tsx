import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />

      <div>
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
