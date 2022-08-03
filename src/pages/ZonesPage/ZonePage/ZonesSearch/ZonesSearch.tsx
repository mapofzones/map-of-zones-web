import { useMemo, useState } from 'react';

import { ScrollableContainer, Search } from 'components';

import { ZoneInfo } from './ZoneInfo/ZoneInfo';
import styles from './ZonesSearch.module.scss';
import { ZonesSearchProps } from './ZonesSearch.props';

export function ZonesSearch({ currentZone, zonesList }: ZonesSearchProps): JSX.Element {
  const [searchValue, setSearchValue] = useState('');

  const filteredZones = useMemo(
    () =>
      searchValue
        ? zonesList?.filter((zone) => zone.name.toLowerCase().includes(searchValue.toLowerCase()))
        : zonesList,
    [searchValue, zonesList]
  );

  const onSearchChange = (value: string) => {
    setSearchValue(value);
  };

  return (
    <div className={styles.container}>
      <Search
        className={styles.searchContainer}
        onSearchChange={onSearchChange}
        placeholder={zonesList.length + ' Zones'}
      />

      <ScrollableContainer className={styles.itemsContainer}>
        {!!searchValue && !filteredZones?.length && (
          <div className={styles.zonesNotFoundContainer}>No zones found.</div>
        )}

        {filteredZones.map((zone) => (
          <ZoneInfo
            key={`zone_${zone.zone}`}
            currentZone={currentZone}
            searchValue={searchValue}
            zone={zone}
          />
        ))}
      </ScrollableContainer>
    </div>
  );
}
