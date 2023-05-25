import { useEffect } from 'react';

import { Outlet, useLocation } from 'react-router-dom';

import { EarthIcon, GithubLogo, TgLogo, TwitterLogo } from 'assets/icons';
import { AnimatedArrowDown, ExternalLink, SkeletonTextWrapper, ZoneLogo } from 'components';
import { IbcVolumeDisclaimer } from 'components/IbcVolumeDisclaimer';
import { useZoneLinksAnalytics } from 'hooks/analytics/Multipage/useZoneLinksAnalytics';
import { useZonesData } from 'hooks/queries/useZonesData';
import { useComponentVisible } from 'hooks/useComponentVisible';
import { useTabletMediumMediaQuery } from 'hooks/useMediaQuery';
import { IsGravityBridge } from 'services/IsGravityBridge';

import { useZonesListZoneDetails } from './useZonesListZoneDetails';
import { ZoneNavigation } from './ZoneNavigation/ZoneNavigation';
import styles from './ZonePage.module.scss';
import { ZonesSelector } from './ZonesSelector/ZonesSelector';

export function ZonePage() {
  const isTabletMedium = useTabletMediumMediaQuery();

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

  const showDisclaimer = IsGravityBridge(data?.zone ?? '');

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.zoneContainer} ref={ref}>
          <div className={styles.selectedZoneInfo}>
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
            {showDisclaimer && <IbcVolumeDisclaimer className={styles.disclaimer} />}
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

        <ZoneNavigation
          className={styles.tabsContainer}
          peersCount={data?.peersCount}
          useSmallView={isTabletMedium}
        />
      </div>

      <Outlet />
    </div>
  );
}
