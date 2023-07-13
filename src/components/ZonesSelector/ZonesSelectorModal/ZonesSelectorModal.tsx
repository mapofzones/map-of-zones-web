import { useState } from 'react';

import cn from 'classnames';

import { ZoneInfoWithSearch } from 'components';
import { useFilteredZones } from 'hooks/useFilteredZones';
import { ScrollableContainer, Search } from 'ui';

import styles from './ZonesSelectorModal.module.scss';
import { ZonesSearchProps } from './ZonesSelectorModal.props';

export function ZonesSelectorModal({
  currentZone,
  zonesList,
  modalPosition,
  onZoneSelected,
}: ZonesSearchProps): JSX.Element {
  const [searchValue, setSearchValue] = useState('');

  const filteredZones = useFilteredZones(zonesList, searchValue);

  const onSearchChange = (value: string) => {
    setSearchValue(value);
  };

  return (
    <div className={cn(styles.container, { [styles.right]: modalPosition === 'right' })}>
      <Search
        autoFocus={true}
        className={styles.searchContainer}
        onSearchChange={onSearchChange}
        placeholder={zonesList.length + ' Zones'}
      />

      <ScrollableContainer className={styles.itemsContainer}>
        {!!searchValue && !filteredZones?.length && (
          <div className={styles.zonesNotFoundContainer}>No zones found.</div>
        )}

        {filteredZones.map((zone) => (
          <div
            className={cn(styles.zone, { [styles.activeZone]: currentZone === zone.zone })}
            key={`zone_${zone.zone}`}
            onClick={() => onZoneSelected(zone.zone)}
          >
            <ZoneInfoWithSearch searchValue={searchValue} zone={zone} />
          </div>
        ))}
      </ScrollableContainer>
    </div>
  );
}
