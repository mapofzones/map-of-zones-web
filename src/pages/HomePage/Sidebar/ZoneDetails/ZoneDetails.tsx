import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';

import { ExternalLink } from 'components';
import { CloseIcon, EarthIcon } from 'icons';

import styles from './ZoneDetails.module.scss';

function ZoneDetails() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const data = {
    logoUrl: '',
    name: 'Osmosis',
    website: 'http://osmosis',
  };

  const closeDetails = () => {
    navigate({
      pathname: '/map',
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
            <div className={styles.zoneWebsiteContainer}>
              <ExternalLink Icon={EarthIcon} href={data.website!}>
                {data.website}
              </ExternalLink>
            </div>
          </div>

          <Outlet />
        </div>
      )}
    </>
  );
}

export { ZoneDetails };
