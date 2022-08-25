import { Outlet } from 'react-router-dom';

import {
  ButtonGroup,
  ExternalLink,
  ZoneLogo,
  SkeletonTextWrapper,
  NavLinkWithSearchParams,
} from 'components';
import { useNavigateWithSearchParams } from 'hooks/useNavigateWithSearchParams';
import { CloseCircleIcon, EarthIcon } from 'icons';

import { useZoneDetails } from './useZoneDetails';
import styles from './ZoneDetails.module.scss';

function ZoneDetails() {
  const navigateWithSearchParams = useNavigateWithSearchParams();

  const { data, loading } = useZoneDetails();

  const closeDetails = () => {
    navigateWithSearchParams('/home');
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
              <ExternalLink Icon={EarthIcon} href={data.website}>
                {data.website}
              </ExternalLink>
            )}
          </SkeletonTextWrapper>
        </div>
      </div>

      <ButtonGroup className={styles.pagesSwitcher}>
        <NavLinkWithSearchParams to="overview">Overview</NavLinkWithSearchParams>
        <NavLinkWithSearchParams to="peers">Peers</NavLinkWithSearchParams>
      </ButtonGroup>

      <Outlet />
    </div>
  );
}

export { ZoneDetails };
