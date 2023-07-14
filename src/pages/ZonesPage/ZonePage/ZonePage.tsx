import { matchPath, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

import { EarthIcon, GithubLogo, TgLogo, TwitterLogo } from 'assets/icons';
import { CompareButton } from 'components/CompareButton';
import { ZonesSelector } from 'components/ZonesSelector/ZonesSelector';
import { ZonesSelectorWrapper } from 'components/ZonesSelector/ZonesSelectorWrapper';
import { useZoneLinksAnalytics } from 'hooks/analytics/Multipage/useZoneLinksAnalytics';
import { useZonesData } from 'hooks/queries/useZonesData';
import { useTabletMediumMediaQuery } from 'hooks/useMediaQuery';
import {
  getZonesComparisonPath,
  getZonesComparisonSearchPath,
  getZonesOverviewPath,
} from 'routing';
import { ExternalLink, SkeletonTextWrapper } from 'ui';

import { useZonesListZoneDetails } from './useZonesListZoneDetails';
import { ZoneNavigation } from './ZoneNavigation/ZoneNavigation';
import styles from './ZonePage.module.scss';

export function ZonePage() {
  const isTabletMedium = useTabletMediumMediaQuery();

  const location = useLocation();
  const matchResult = matchPath({ path: getZonesOverviewPath() }, location.pathname);
  const showCompareButton = !!matchResult;

  const { zone = '' } = useParams();
  const { data, loading } = useZonesListZoneDetails(zone);

  const { data: zonesList } = useZonesData();

  const trackZoneLinksAnalytics = useZoneLinksAnalytics();

  const navigate = useNavigate();
  function onZonesSelected(zone: string) {
    navigate(`/${getZonesOverviewPath(zone)}`);
  }

  function onZonesToCompareSelected(zoneToCompare: string) {
    navigate(`/${getZonesComparisonPath()}${getZonesComparisonSearchPath([zone, zoneToCompare])}`);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.zoneContainer}>
          <ZonesSelector
            zone={zone}
            loading={loading}
            zonesList={zonesList}
            onZonesSelected={onZonesSelected}
          />

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

        <ZoneNavigation
          className={styles.tabsContainer}
          peersCount={data?.peersCount}
          useSmallView={isTabletMedium}
        />

        {showCompareButton && (
          <ZonesSelectorWrapper
            modalPosition="right"
            zonesList={zonesList.filter((item) => item.zone !== zone)}
            onZoneSelected={onZonesToCompareSelected}
          >
            <CompareButton />
          </ZonesSelectorWrapper>
        )}
      </div>

      <Outlet />
    </div>
  );
}
