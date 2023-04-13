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
  selectedIndex,
  activeItemRef,
  onItemClick,
}: ZoneLinkItemsWithSearchProps) {
  return (
    <>
      {title && <div className={styles.groupTitle}>{title}</div>}
      {zones.map((zone, index) => (
        <Link
          ref={index === selectedIndex ? activeItemRef : null}
          className={cn(styles.zone, { [styles.activeZone]: index === selectedIndex })}
          key={`zone_${zone.zone}`}
          to={`/${getZonesOverviewPath(zone.zone)}`}
          onClick={onItemClick}
        >
          <ZoneInfoWithSearch searchValue={searchValue} zone={zone} />
        </Link>
      ))}
      {!!searchValue && !zones?.length && (
        <div className={styles.zonesNotFoundContainer}>No zones found.</div>
      )}
    </>
  );
}
