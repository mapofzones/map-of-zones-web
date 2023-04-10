import cn from 'classnames';
import { Link } from 'react-router-dom';

import { ZoneInfoWithSearch } from 'components';
import { useFilteredZones } from 'hooks/useFilteredZones';
import { getZonesOverviewPath } from 'routing';

import styles from './ZoneLinkItemsWithSearch.module.scss';

import { ZoneLinkItemsWithSearchProps } from '.';

export function ZoneLinkItemsWithSearch({
  title,
  zones,
  searchValue,
}: ZoneLinkItemsWithSearchProps) {
  const filteredZones = useFilteredZones(zones, searchValue);

  return (
    <>
      {title && <div className={styles.groupTitle}>{title}</div>}
      {filteredZones.map((zone) => (
        <Link
          className={cn(styles.zone)}
          key={`zone_${zone.zone}`}
          to={`/${getZonesOverviewPath(zone.zone)}`}
        >
          <ZoneInfoWithSearch searchValue={searchValue} zone={zone} />
        </Link>
      ))}
      {!!searchValue && !filteredZones?.length && (
        <div className={styles.zonesNotFoundContainer}>No zones found.</div>
      )}
    </>
  );
}
