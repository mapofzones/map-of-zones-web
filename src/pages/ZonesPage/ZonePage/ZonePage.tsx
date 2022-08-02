import { Outlet } from 'react-router-dom';

import { ExternalLink, NavigationButton, PeriodSelector, ZoneLogo } from 'components';
import { EarthIcon } from 'icons';

import { useZonesListZoneDetails } from './useZonesListZoneDetails';
import styles from './ZonePage.module.scss';

export function ZonePage() {
  const { data, loading } = useZonesListZoneDetails();

  return (
    <div>
      <div className={styles.header}>
        <div>
          <div className={styles.detailsTitle}>
            <ZoneLogo
              logoUrl={data?.logoUrl}
              name={data?.name}
              size={'36px'}
              loading={loading}
              className={styles.zoneLogo}
            />
            <span className={styles.zoneName}>{data?.name}</span>
          </div>
          <span className={styles.zoneWebsite}>
            {data?.website && (
              <ExternalLink Icon={EarthIcon} href={data.website}>
                {data.website}
              </ExternalLink>
            )}
          </span>
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
