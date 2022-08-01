import { NavLink } from 'react-router-dom';

import { Logo } from 'icons';

import styles from './Header.module.scss';

function Header({ ...props }): JSX.Element {
  return (
    <header className={styles.container} {...props}>
      <div className={styles.logoContainer}>
        <Logo />
        <span className={styles.tagline}>Cosmos network explorer</span>
      </div>
      <div className={styles.headerContent}>
        <nav>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/zones">Zones</NavLink>
          <NavLink to="/assets">Assets</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        <div className={styles.marketCapContainer}>
          <span className={styles.marketCapTitle}>Cosmos Network Market Cap: </span>
          <span className={styles.marketCapValue}>$198,308,551,250</span>
        </div>
      </div>
      {/* <hr className={styles.line} /> */}
    </header>
  );
}

export default Header;
