import cn from 'classnames';

import { ZoneInfoWithSearch } from 'components';

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
  if (!zones?.length) {
    return <></>;
  }

  return (
    <>
      {title && <div className={styles.groupTitle}>{title}</div>}
      {zones.map((zone, index) => (
        <div
          ref={index === selectedIndex ? activeItemRef : null}
          className={cn(styles.zone, { [styles.activeZone]: index === selectedIndex })}
          key={`zone_${zone.zone}`}
          onClick={() => onItemClick?.(zone.zone)}
        >
          <ZoneInfoWithSearch searchValue={searchValue} zone={zone} />
        </div>
      ))}
    </>
  );
}
