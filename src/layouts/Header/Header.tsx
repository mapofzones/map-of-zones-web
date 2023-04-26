import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import { Logo } from 'assets/icons';
import { NumberFormat, NumberType, SkeletonTextWrapper } from 'components';
import { NetworkMarketCapInfoDocument } from 'graphql/v2/common/__generated__/CosmosNetworkMarketCap.query.generated';
import { useTabletMediumMediaQuery } from 'hooks/useMediaQuery';
import Footer from 'layouts/Footer/Footer';
import { homePath } from 'routing';

import { BurgerWithRef } from './Burger/Burger';
import { GlobalSearch } from './GlobalSearch';
import styles from './Header.module.scss';
import { Menu } from './Menu';

function Header({ ...props }): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data, loading } = useQuery(NetworkMarketCapInfoDocument);

  const isTabletMedium = useTabletMediumMediaQuery();

  useEffect(() => {
    if (isMenuOpen && isTabletMedium) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen, isTabletMedium]);

  useEffect(() => {
    if (!isTabletMedium && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen, isTabletMedium, setIsMenuOpen]);

  return (
    <header className={cn(styles.container, { [styles.fixed]: isMenuOpen })} {...props}>
      <div className={styles.backdrop}></div>
      {isTabletMedium && (
        <BurgerWithRef
          className={styles.burgerIcon}
          isOpened={isMenuOpen}
          setIsOpened={setIsMenuOpen}
        />
      )}
      <div className={styles.logoContainer}>
        <NavLink to={`/${homePath}`}>
          <Logo />
        </NavLink>
      </div>
      <div className={styles.headerContent}>
        <div className={cn(styles.menuContainer, { [styles.opened]: isMenuOpen })}>
          <Menu vertical={isTabletMedium} onItemClick={() => setIsMenuOpen(false)} />
          {isMenuOpen && isTabletMedium && <Footer />}
        </div>
        <GlobalSearch />
        {!isTabletMedium && (
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
        )}
      </div>
    </header>
  );
}

export default Header;
