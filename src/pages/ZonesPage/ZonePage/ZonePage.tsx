import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';

import { ExternalLink, NavigationButton, PeriodSelector, ZoneLogo } from 'components';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { ArrowDown, EarthIcon } from 'icons';

import { useZonesData } from './useZonesData';
import { useZonesListZoneDetails } from './useZonesListZoneDetails';
import styles from './ZonePage.module.scss';
import { ZonesSearch } from './ZonesSearch/ZonesSearch';

export function ZonePage() {
  const location = useLocation();

  const [isSearchVisible, setSearchVisible] = useState(false);

  const [selectedPeriod] = useSelectedPeriod();

  const { data, loading } = useZonesListZoneDetails();

  const { data: zonesList } = useZonesData(selectedPeriod);

  const toggleSearch = () => setSearchVisible((prevState) => !prevState);

  useEffect(() => setSearchVisible(false), [location]);

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
            <motion.div
              className={styles.arrowContainer}
              variants={{
                searchVisible: { rotateX: 180 },
                searchHidden: { rotateX: 0 },
              }}
              animate={isSearchVisible ? 'searchVisible' : 'searchHidden'}
              initial="searchHidden"
              transition={{ duration: 0.5 }}
              onClick={toggleSearch}
            >
              <ArrowDown />
            </motion.div>
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

      {isSearchVisible && <ZonesSearch currentZone={data} zonesList={zonesList} />}

      <Outlet />
    </div>
  );
}
