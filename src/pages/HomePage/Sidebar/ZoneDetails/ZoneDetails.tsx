import { Outlet } from 'react-router-dom';

import { Link } from 'components';
import { EarthIcon } from 'icons';

import styles from './ZoneDetails.module.scss';

function ZoneDetails() {
  const data = {
    logoUrl: '',
    name: 'Osmosis',
    website: 'http://osmosis',
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
            <div className={styles.zoneWebsiteContainer}>
              <Link Icon={EarthIcon} href={data.website!}>
                {data.website}
              </Link>
            </div>
          </div>

          <Outlet />
        </div>
      )}
    </>
  );
}

export { ZoneDetails };
