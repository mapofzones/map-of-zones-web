import { NavLink, Outlet, useNavigate, useSearchParams } from 'react-router-dom';

import { ButtonGroup, ExternalLink } from 'components';
import { CloseIcon, EarthIcon } from 'icons';

import { useZoneDetails } from './useZoneDetails';
import styles from './ZoneDetails.module.scss';

function ZoneDetails() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const data = useZoneDetails();

  const closeDetails = () => {
    navigate({
      pathname: '/home',
      search: '?' + searchParams.toString(),
    });
  };

  return (
    <>
      {data && (
        <div className={styles.container}>
          <div className={styles.detailsTitle}>
            <span className={styles.logoContainer}>
              {data.logoUrl && (
                <img className={styles.logo} src={data.logoUrl} alt={`${data.name} logo`} />
              )}
            </span>
            <span className={styles.zoneName}>{data.name}</span>
            <CloseIcon className={styles.closeIcon} onClick={closeDetails} />
            {data.website && (
              <div className={styles.zoneWebsiteContainer}>
                <ExternalLink Icon={EarthIcon} href={data.website}>
                  {data.website}
                </ExternalLink>
              </div>
            )}
            <ButtonGroup className={styles.pagesSwitcher}>
              <NavLink to="overview">Overview</NavLink>
              <NavLink to="peers">Peers</NavLink>
            </ButtonGroup>
          </div>

          <Outlet />
        </div>
      )}
    </>
  );
}

export { ZoneDetails };
