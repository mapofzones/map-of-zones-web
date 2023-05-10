import { NavLink } from 'react-router-dom';

import { overviewPath, peersPath } from 'routing';
import { ButtonGroup, NavigationButton } from 'ui';

import styles from './ZoneNavigation.module.scss';
import { ZoneNavigationProps } from './ZoneNavigation.props';

export function ZoneNavigation({ className, peersCount, useSmallView }: ZoneNavigationProps) {
  return (
    <div className={className}>
      {useSmallView && (
        <ButtonGroup className={styles.pagesSwitcher}>
          <NavLink to={overviewPath}>Overview</NavLink>
          <NavLink className={styles.peersTab} to={peersPath}>{`Peers ${
            peersCount ? `(${peersCount})` : ''
          }`}</NavLink>
        </ButtonGroup>
      )}

      {!useSmallView && (
        <div className={styles.navigationButtonsContainer}>
          <NavigationButton to={overviewPath}>Overview</NavigationButton>
          <NavigationButton to={peersPath} count={peersCount}>
            Peers
          </NavigationButton>
        </div>
      )}
    </div>
  );
}
