import { useEffect } from 'react';

import { Outlet, useLocation } from 'react-router-dom';

import {
  AnimatedArrowDown,
  ExternalLink,
  PeriodSelector,
  SkeletonTextWrapper,
  ZoneLogo,
} from 'components';
import { useZoneLinksAnalytics } from 'hooks/analytics/multipage/useZoneLinksAnalytics';
import { useComponentVisible } from 'hooks/useComponentVisible';
import { useMediaQuery } from 'hooks/useMediaQuery';
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

  const { data, loading } = useZonesListZoneDetails();

  const { data: zonesList } = useZonesData();

  const toggleSearch = () => setSearchVisible(!isSearchVisible);

  const trackZoneLinksAnalytics = useZoneLinksAnalytics();

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
          <SkeletonTextWrapper
            className={styles.zoneLinks}
            loading={loading}
            defaultText={'https://cosmos.network'}
          >
            {data?.website && (
              <ExternalLink
                Icon={EarthIcon}
                href={data.website}
                onClick={() => trackZoneLinksAnalytics('website')}
              >
                {data.website}
              </ExternalLink>
            )}

            {data?.telegram && (
              <ExternalLink
                Icon={TgLogo}
                href={data.telegram}
                onClick={() => trackZoneLinksAnalytics('telegram')}
              />
            )}

            {data?.twitter && (
              <ExternalLink
                Icon={TwitterLogo}
                href={data.twitter}
                onClick={() => trackZoneLinksAnalytics('twitter')}
              />
            )}

            {data?.git && (
              <ExternalLink
                Icon={GithubLogo}
                href={data.git}
                onClick={() => trackZoneLinksAnalytics('git')}
              />
            )}
          </SkeletonTextWrapper>

          {isSearchVisible && <ZonesSelector currentZone={data} zonesList={zonesList} />}
        </div>

        <ZoneNavigation peersCount={data?.peersCount} />

        <PeriodSelector className={styles.periodContainer} useDropdown={isMobile} />
      </div>

      <Outlet />
    </div>
  );
}
