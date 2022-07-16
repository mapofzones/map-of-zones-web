import { NavLink, Outlet, useNavigate, useSearchParams } from 'react-router-dom';

import { ButtonGroup, ExternalLink, ZoneLogo, SkeletonTextWrapper } from 'components';
import { CloseCircleIcon, EarthIcon } from 'icons';

import { useZoneDetails } from './useZoneDetails';
import styles from './ZoneDetails.module.scss';

function ZoneDetails() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const { data, loading } = useZoneDetails();

  const closeDetails = () => {
    navigate({
      pathname: '/home',
      search: '?' + searchParams.toString(),
    });
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
        <NavLink to="overview">Overview</NavLink>
        <NavLink to="peers">Peers</NavLink>
      </ButtonGroup>

      <Outlet />
    </div>
  );
}

export { ZoneDetails };
