import { NavLink } from 'react-router-dom';

import { ButtonGroup, NavigationButton } from 'components';
import { overviewPath, peersPath } from 'routing';

import styles from './ZoneNavigation.module.scss';
import { ZoneNavigationProps } from './ZoneNavigation.props';

export function ZoneNavigation({ peersCount, useSmallView }: ZoneNavigationProps) {
  return (
    <>
      {useSmallView && (
        <ButtonGroup className={styles.pagesSwitcher}>
          <NavLink to={overviewPath}>Overview</NavLink>
          <NavLink to={peersPath}>{`Peers ${peersCount ? `(${peersCount})` : ''}`}</NavLink>
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
    </>
  );
}
