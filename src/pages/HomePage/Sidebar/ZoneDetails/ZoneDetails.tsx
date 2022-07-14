import { NavLink, Outlet, useNavigate, useSearchParams } from 'react-router-dom';

import { ButtonGroup, ExternalLink, ZoneLogo, SkeletonLine } from 'components';
import { CloseIcon, EarthIcon } from 'icons';

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
      <CloseIcon className={styles.closeIcon} onClick={closeDetails} />

      <div className={styles.detailsTitle}>
        <ZoneLogo
          logoUrl={data?.logoUrl}
          name={data?.name}
          size={'60px'}
          loading={loading}
          className={styles.zoneLogo}
        />
        <div className={styles.zoneBaseInfo}>
          <SkeletonLine loading={loading} defaultValue={'Cosmos hub'} className={styles.zoneName}>
            {data?.name}
          </SkeletonLine>
          <SkeletonLine
            loading={loading}
            defaultValue={'https://cosmos.network'}
            className={styles.zoneWebsite}
          >
            {data?.website && (
              <ExternalLink Icon={EarthIcon} href={data.website}>
                {data.website}
              </ExternalLink>
            )}
          </SkeletonLine>
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
