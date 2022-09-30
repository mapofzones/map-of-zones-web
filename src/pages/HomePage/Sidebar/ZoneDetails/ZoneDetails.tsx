import { Outlet } from 'react-router-dom';

import { CloseCircleIcon, EarthIcon } from 'assets/icons';
import {
  ButtonGroup,
  ExternalLink,
  ZoneLogo,
  SkeletonTextWrapper,
  NavLinkWithSearchParams,
} from 'components';
import { useZoneLinksAnalytics } from 'hooks/analytics/Multipage/useZoneLinksAnalytics';
import { useNavigateWithSearchParams } from 'hooks/useNavigateWithSearchParams';
import { homePath, overviewPath, peersPath } from 'routing';

import { useZoneDetails } from './useZoneDetails';
import styles from './ZoneDetails.module.scss';

function ZoneDetails() {
  const navigateWithSearchParams = useNavigateWithSearchParams();

  const { data, loading } = useZoneDetails();

  const trackZoneLinksAnalytics = useZoneLinksAnalytics();

  const closeDetails = () => {
    navigateWithSearchParams(`/${homePath}`);
  };

  return (
    <div className={styles.container}>
      <CloseCircleIcon className={styles.closeIcon} onClick={closeDetails} />

      <div className={styles.detailsTitle}>
        <ZoneLogo
          logoUrl={data?.logoUrl}
          name={data?.name}
          size={'60px'}
          loading={loading}
          className={styles.zoneLogo}
          withOuterShadow={true}
        />
        <div className={styles.zoneBaseInfo}>
          <SkeletonTextWrapper
            loading={loading}
            defaultText={'Cosmos hub'}
            className={styles.zoneName}
          >
            {data?.name}
          </SkeletonTextWrapper>
          <SkeletonTextWrapper
            loading={loading}
            defaultText={'https://cosmos.network'}
            className={styles.zoneWebsite}
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
          </SkeletonTextWrapper>
        </div>
      </div>

      <ButtonGroup className={styles.pagesSwitcher}>
        <NavLinkWithSearchParams to={overviewPath}>Overview</NavLinkWithSearchParams>
        <NavLinkWithSearchParams to={peersPath}>Peers</NavLinkWithSearchParams>
      </ButtonGroup>

      <Outlet />
    </div>
  );
}

export { ZoneDetails };
