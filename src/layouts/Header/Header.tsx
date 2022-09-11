import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import { useComponentVisible } from 'hooks/useComponentVisible';
import { Logo } from 'icons';

import { BurgerWithRef } from './Burger/Burger';
import styles from './Header.module.scss';

function Header({ ...props }): JSX.Element {
  const {
    ref,
    isVisible: isMenuOpen,
    setIsVisible: setIsMenuOpen,
  } = useComponentVisible<HTMLDivElement>(false);

  return (
    <header className={styles.container} {...props}>
      <div className={styles.backdrop}></div>
      <BurgerWithRef
        ref={ref}
        className={styles.burgerIcon}
        isOpened={isMenuOpen}
        setIsOpened={setIsMenuOpen}
      />
      <div className={styles.logoContainer}>
        <NavLink to="/home">
          <Logo />
        </NavLink>
      </div>
      <div className={styles.headerContent}>
        <nav className={cn(styles.menu, { [styles.opened]: isMenuOpen })}>
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
    </header>
  );
}

export default Header;
