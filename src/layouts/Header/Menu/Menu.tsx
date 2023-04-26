import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import {
  HeaderMenuTab,
  useHeaderMenuClicksAnalytics,
} from 'hooks/analytics/Multipage/useHeaderMenuClicksAnalytics';
import { assetsPath, homePath, swapPath, zonesPath } from 'routing';

import styles from './Menu.module.scss';

export function Menu({ vertical, onItemClick }: { vertical?: boolean; onItemClick?: () => void }) {
  const trackHeaderTabClick = useHeaderMenuClicksAnalytics();

  const onMenuItemClick = (tab: HeaderMenuTab) => {
    onItemClick?.();
    trackHeaderTabClick(tab);
  };

  return (
    <nav className={cn(styles.menu, { [styles.vertical]: !!vertical })}>
      <NavLink to={`/${homePath}`} onClick={() => onMenuItemClick('home')}>
        Home
      </NavLink>
      <NavLink to={`/${zonesPath}`} onClick={() => onMenuItemClick('zones')}>
        Zones
      </NavLink>
      <NavLink to={`/${assetsPath}`} onClick={() => onMenuItemClick('assets')}>
        Assets
      </NavLink>
      <NavLink to={`/${swapPath}`} onClick={() => onMenuItemClick('swap')}>
        Swap
      </NavLink>
      {/* <NavLink to={`/${aboutPath}`}>About</NavLink> */}
    </nav>
  );
}
