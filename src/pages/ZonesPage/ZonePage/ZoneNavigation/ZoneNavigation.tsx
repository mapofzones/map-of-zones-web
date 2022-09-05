import { NavLink } from 'react-router-dom';

import { ButtonGroup, NavigationButton } from 'components';
import { useMediaQuery } from 'hooks/useMediaQuery';

import styles from './ZoneNavigation.module.scss';
import { ZoneNavigationProps } from './ZoneNavigation.props';

export function ZoneNavigation({ data }: ZoneNavigationProps) {
  const isMobile = useMediaQuery('(max-width: 375px)');

  return (
    <>
      {isMobile && (
        <ButtonGroup className={styles.pagesSwitcher}>
          <NavLink to="overview">Overview</NavLink>
          <NavLink to="peers">{`Peers ${data?.peersCount ? `(${data.peersCount})` : ''}`}</NavLink>
        </ButtonGroup>
      )}

      {!isMobile && (
        <div className={styles.navigationButtonsContainer}>
          <NavigationButton to="overview">Overview</NavigationButton>
          <NavigationButton to="peers" count={data?.peersCount}>
            Peers
          </NavigationButton>
        </div>
      )}
    </>
  );
}
