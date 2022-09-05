import { useEffect } from 'react';

import { Outlet, useLocation } from 'react-router-dom';

import { AnimatedArrowDown, ExternalLink, PeriodSelector, ZoneLogo } from 'components';
import { useComponentVisible } from 'hooks/useComponentVisible';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { EarthIcon, GithubLogo, TgLogo, TwitterLogo } from 'icons';

import { useZonesData } from './useZonesData';
import { useZonesListZoneDetails } from './useZonesListZoneDetails';
import { ZoneNavigation } from './ZoneNavigation/ZoneNavigation';
import styles from './ZonePage.module.scss';
import { ZonesSelector } from './ZonesSelector/ZonesSelector';

export function ZonePage() {
  const isMobile = useMediaQuery('(max-width: 375px)');

  const location = useLocation();

  const {
    ref,
    isVisible: isSearchVisible,
    setIsVisible: setSearchVisible,
  } = useComponentVisible<HTMLDivElement>(false);

  const [selectedPeriod] = useSelectedPeriod();

  const { data, loading } = useZonesListZoneDetails();

  const { data: zonesList } = useZonesData(selectedPeriod);

  const toggleSearch = () => setSearchVisible(!isSearchVisible);

  useEffect(() => setSearchVisible(false), [location, setSearchVisible]);

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.zoneContainer} ref={ref}>
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

        <ZoneNavigation data={data} />

        <PeriodSelector className={styles.periodContainer} useDropdown={isMobile} />
      </div>

      <Outlet />
    </div>
  );
}
