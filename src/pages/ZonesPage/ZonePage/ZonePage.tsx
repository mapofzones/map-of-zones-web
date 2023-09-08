import { matchPath, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

import { EarthIcon, GithubLogo, TgLogo, TwitterLogo } from 'assets/icons';
import { PeriodSelector } from 'components';
import { CompareButton } from 'components/CompareButton';
import { ZonesSelector } from 'components/ZonesSelector/ZonesSelector';
import { ZonesSelectorWrapper } from 'components/ZonesSelector/ZonesSelectorWrapper';
import { useZoneLinksAnalytics } from 'hooks/analytics/Multipage/useZoneLinksAnalytics';
import { SelectedZonesComparisonSource } from 'hooks/analytics/ZonesPage/ZonesComparisonPage/useViewedZonesComparisonPageAnalytics';
import { useZonesData } from 'hooks/queries/useZonesData';
import { useTabletMediumMediaQuery, useTabletSmallMediaQuery } from 'hooks/useMediaQuery';
import {
  getZonesComparisonPath,
  getZonesComparisonSearchPath,
  getZonesOverviewPath,
  getZonesPeersPath,
} from 'routing';
import { ExternalLink, SkeletonTextWrapper } from 'ui';

import { useZonesListZoneDetails } from './useZonesListZoneDetails';
import { ZoneNavigation } from './ZoneNavigation/ZoneNavigation';
import styles from './ZonePage.module.scss';

export function ZonePage() {
  const isTabletMedium = useTabletMediumMediaQuery();
  const isTabletSmall = useTabletSmallMediaQuery();

  const location = useLocation();
  const showCompareButton = !!matchPath({ path: getZonesOverviewPath() }, location.pathname);
  const showPeriodSelector = !!matchPath({ path: getZonesPeersPath() }, location.pathname);

  const { zone = '' } = useParams();
  const { data, loading } = useZonesListZoneDetails(zone);

  const { data: zonesList } = useZonesData();

  const trackZoneLinksAnalytics = useZoneLinksAnalytics();

  const navigate = useNavigate();
  function onZonesSelected(zone: string) {
    navigate(`/${getZonesOverviewPath(zone)}`);
  }

  function onZonesToCompareSelected(zoneToCompare: string) {
    navigate(`/${getZonesComparisonPath()}${getZonesComparisonSearchPath([zone, zoneToCompare])}`, {
      state: { source: SelectedZonesComparisonSource.OverviewCompareButton },
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ZonesSelector
          zone={zone}
          loading={loading}
          zonesList={zonesList}
          onZonesSelected={onZonesSelected}
        />

        <ZoneNavigation
          className={styles.tabsContainer}
          peersCount={data?.peersCount}
          useSmallView={isTabletMedium}
        />

        {showPeriodSelector && (
          <PeriodSelector className={styles.periodContainer} useDropdown={isTabletSmall} />
        )}

        {showCompareButton && (
          <ZonesSelectorWrapper
            zonesList={zonesList.filter((item) => item.zone !== zone)}
            onZoneSelected={onZonesToCompareSelected}
          >
            <CompareButton className={styles.compareBtn} text="Compare Zone" />
          </ZonesSelectorWrapper>
        )}
      </div>

      <div className={styles.commonContent}>
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
      </div>

      <Outlet />
    </div>
  );
}
