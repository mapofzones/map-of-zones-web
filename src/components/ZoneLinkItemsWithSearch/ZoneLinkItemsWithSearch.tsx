import { useCallback } from 'react';

import cn from 'classnames';

import { ZoneInfoWithSearch } from 'components';
import { Checkbox } from 'components/Checkbox';
import { useAppSelector } from 'store/hooks';
import { useZonesPageComparisonModeActionsCreator } from 'store/ZonesPageComparisonMode.slice';

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
  const { isComparison, zones: selectedZones } = useAppSelector(
    (state) => state.zonesPageComparisonMode
  );

  const { addZoneToCompare, removeZoneFromCompare } = useZonesPageComparisonModeActionsCreator();

  const isCheckedFunc = useCallback(
    (zoneKey: string) => selectedZones.includes(zoneKey),
    [selectedZones]
  );

  const onCheckedChange = useCallback(
    (zoneKey: string, checked: boolean) => {
      if (checked) {
        addZoneToCompare(zoneKey);
      } else {
        removeZoneFromCompare(zoneKey);
      }
    },
    [addZoneToCompare, removeZoneFromCompare]
  );

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
          {isComparison && (
            <Checkbox
              className={styles.checkbox}
              checked={isCheckedFunc?.(zone.zone) ?? false}
              onCheckedChange={(checked) => onCheckedChange?.(zone.zone, checked)}
            />
          )}
          <ZoneInfoWithSearch className={styles.content} searchValue={searchValue} zone={zone} />
        </div>
      ))}
    </>
  );
}
