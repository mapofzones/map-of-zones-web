import cn from 'classnames';
import { NavLink, Outlet } from 'react-router-dom';

import { ExternalLink, PeriodSelector, ZoneLogo } from 'components';
import { EarthIcon } from 'icons';

import styles from './ZonePage.module.scss';
import { useZoneDetails } from './ZonePeers/useZoneDetails';

export function ZonePage() {
  const { data, loading } = useZoneDetails();

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
          <NavLink
            className={({ isActive }) =>
              cn(styles.navigationButton, {
                [styles.navigationButtonActive]: isActive,
              })
            }
            to="overview"
          >
            Overview
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn(styles.navigationButton, {
                [styles.navigationButtonActive]: isActive,
              })
            }
            to="peers"
          >
            Peers
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn(styles.navigationButton, {
                [styles.navigationButtonActive]: isActive,
              })
            }
            to="nodes"
          >
            Nodes
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return cn(styles.navigationButton, {
                [styles.navigationButtonActive]: isActive,
              });
            }}
            to="pools"
          >
            Pools
          </NavLink>
        </div>

        <PeriodSelector />
      </div>

      <Outlet />
    </div>
  );
}
