import { useState } from 'react';

import cn from 'classnames';
import { Link } from 'react-router-dom';

import { ZoneInfoWithSearch } from 'components';
import { useFilteredZones } from 'hooks/useFilteredZones';
import { getZonesOverviewPath } from 'routing';
import { ScrollableContainer, Search } from 'ui';

import styles from './ZonesSelectorModal.module.scss';
import { ZonesSearchProps } from './ZonesSelectorModal.props';

export function ZonesSelectorModal({ currentZone, zonesList }: ZonesSearchProps): JSX.Element {
  const [searchValue, setSearchValue] = useState('');

  const filteredZones = useFilteredZones(zonesList, searchValue);

  const onSearchChange = (value: string) => {
    setSearchValue(value);
  };

  return (
    <div className={styles.container}>
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
          <Link
            className={cn(styles.zone, { [styles.activeZone]: currentZone?.zone === zone.zone })}
            key={`zone_${zone.zone}`}
            to={`/${getZonesOverviewPath(zone.zone)}`}
          >
            <ZoneInfoWithSearch searchValue={searchValue} zone={zone} />
          </Link>
        ))}
      </ScrollableContainer>
    </div>
  );
}
