import { useEffect } from 'react';

import { Outlet, useLocation } from 'react-router-dom';

import {
  AnimatedArrowDown,
  ExternalLink,
  NavigationButton,
  PeriodSelector,
  ZoneLogo,
} from 'components';
import { useComponentVisible } from 'hooks/useComponentVisible';
import { EarthIcon, GithubLogo, TgLogo, TwitterLogo } from 'icons';

import { useZonesData } from './useZonesData';
import { useZonesListZoneDetails } from './useZonesListZoneDetails';
import styles from './ZonePage.module.scss';
import { ZonesSelector } from './ZonesSelector/ZonesSelector';

export function ZonePage() {
  const location = useLocation();

  const {
    ref,
    isVisible: isSearchVisible,
    setIsVisible: setSearchVisible,
  } = useComponentVisible<HTMLDivElement>(false);

  const { data, loading } = useZonesListZoneDetails();

  const { data: zonesList } = useZonesData();

  const toggleSearch = () => setSearchVisible(!isSearchVisible);

  useEffect(() => setSearchVisible(false), [location, setSearchVisible]);

  return (
    <div>
      <div className={styles.header}>
        <div ref={ref}>
          <div className={styles.detailsTitle} onClick={toggleSearch}>
            <ZoneLogo
              logoUrl={data?.logoUrl}
              name={data?.name}
              size={'36px'}
              loading={loading}
              className={styles.zoneLogo}
            />
            <span className={styles.zoneName}>{data?.name}</span>
            <AnimatedArrowDown className={styles.arrowContainer} isReverted={isSearchVisible} />
          </div>
          <div className={styles.zoneLinks}>
            {data?.website && (
              <ExternalLink Icon={EarthIcon} href={data.website}>
                {data.website}
              </ExternalLink>
            )}

            {data?.telegram && <ExternalLink Icon={TgLogo} href={data.telegram} />}

            {data?.twitter && <ExternalLink Icon={TwitterLogo} href={data.twitter} />}

            {data?.git && <ExternalLink Icon={GithubLogo} href={data.git} />}
          </div>

          {isSearchVisible && <ZonesSelector currentZone={data} zonesList={zonesList} />}
        </div>

        <div className={styles.navigationButtonsContainer}>
          <NavigationButton to="overview">Overview</NavigationButton>
          <NavigationButton to="peers" count={data?.peersCount}>
            Peers
          </NavigationButton>
          <NavigationButton to="nodes">Nodes</NavigationButton>
          <NavigationButton to="pools">Pools</NavigationButton>
        </div>

        <PeriodSelector />
      </div>

      <Outlet />
    </div>
  );
}
