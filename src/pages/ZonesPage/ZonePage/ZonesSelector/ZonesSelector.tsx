import { useMemo, useState } from 'react';

import cn from 'classnames';

import { LinkWithQuery, ScrollableContainer, Search, ZoneInfoWithSearch } from 'components';
import { searchZonesByName } from 'utils/helper';

import styles from './ZonesSelector.module.scss';
import { ZonesSearchProps } from './ZonesSelector.props';

export function ZonesSelector({ currentZone, zonesList }: ZonesSearchProps): JSX.Element {
  const [searchValue, setSearchValue] = useState('');

  const filteredZones = useMemo(
    () => (searchValue ? searchZonesByName(zonesList, searchValue) : zonesList),
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
          <LinkWithQuery
            className={cn(styles.zone, { [styles.activeZone]: currentZone?.zone === zone.zone })}
            key={`zone_${zone.zone}`}
            to={`/zones/${zone.zone}/overview`}
          >
            <ZoneInfoWithSearch searchValue={searchValue} zone={zone} />
          </LinkWithQuery>
        ))}
      </ScrollableContainer>
    </div>
  );
}
