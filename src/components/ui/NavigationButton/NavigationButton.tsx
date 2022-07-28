import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import styles from './NavigationButton.module.scss';
import { NavigationButtonProps } from './NavigationButton.props';

export function NavigationButton({ count, children, to }: NavigationButtonProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(styles.container, {
          [styles.active]: isActive,
        })
      }
      to={to}
    >
      {children}
      {count !== undefined && <div className={styles.counter}>{count}</div>}
    </NavLink>
  );
}
