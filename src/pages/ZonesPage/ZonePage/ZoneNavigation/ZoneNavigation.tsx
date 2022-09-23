import { NavLink } from 'react-router-dom';

import { ButtonGroup, NavigationButton } from 'components';

import styles from './ZoneNavigation.module.scss';
import { ZoneNavigationProps } from './ZoneNavigation.props';

export function ZoneNavigation({ peersCount, useSmallView }: ZoneNavigationProps) {
  return (
    <>
      {useSmallView && (
        <ButtonGroup className={styles.pagesSwitcher}>
          <NavLink to="overview">Overview</NavLink>
          <NavLink to="peers">{`Peers ${peersCount ? `(${peersCount})` : ''}`}</NavLink>
        </ButtonGroup>
      )}

      {!useSmallView && (
        <div className={styles.navigationButtonsContainer}>
          <NavigationButton to="overview">Overview</NavigationButton>
          <NavigationButton to="peers" count={peersCount}>
            Peers
          </NavigationButton>
        </div>
      )}
    </>
  );
}
