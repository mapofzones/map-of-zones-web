import { useQuery } from '@apollo/client';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import { NumberFormat, NumberType, SkeletonTextWrapper } from 'components';
import { NetworkMarketCapInfoDocument } from 'graphql/v2/common/__generated__/CosmosNetworkMarketCap.query.generated';
import { useHeaderMenuClicksAnalytics } from 'hooks/analytics/multipage/useHeaderMenuClicksAnalytics';
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

  const { data, loading } = useQuery(NetworkMarketCapInfoDocument);
  const trackHeaderTabClick = useHeaderMenuClicksAnalytics();

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
          <NavLink to="/home" onClick={() => trackHeaderTabClick('home')}>
            Home
          </NavLink>
          <NavLink to="/zones" onClick={() => trackHeaderTabClick('zones')}>
            Zones
          </NavLink>
          <NavLink to="/assets" onClick={() => trackHeaderTabClick('assets')}>
            Assets
          </NavLink>
          {/* <NavLink to="/about">About</NavLink> */}
        </nav>
        <div className={styles.marketCapContainer}>
          <span className={styles.marketCapTitle}>Cosmos Network Market Cap: </span>
          <SkeletonTextWrapper loading={loading} defaultText={'$13 686 000 000'}>
            <NumberFormat
              className={styles.marketCapValue}
              value={data?.networkMarketCap.aggregate?.sum?.marketCap}
              numberType={NumberType.Currency}
            />
          </SkeletonTextWrapper>
        </div>
      </div>
    </header>
  );
}

export default Header;
