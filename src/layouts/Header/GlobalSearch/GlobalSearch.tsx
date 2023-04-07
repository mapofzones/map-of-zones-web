import { useMemo, useState } from 'react';

import cn from 'classnames';
import { Link } from 'react-router-dom';

import { Portal, ScrollableContainer, Search, ZoneInfoWithSearch } from 'components';
import { useComponentVisible } from 'hooks/useComponentVisible';
import { useFilteredZones } from 'hooks/useFilteredZones';
import { getZonesOverviewPath } from 'routing';

import styles from './GlobalSearch.module.scss';

import { GlobalSearchProps } from '.';

export function GlobalSearch({ ...props }: GlobalSearchProps) {
  const [searchValue, setSearchValue] = useState('');

  const zonesList = useMemo(
    () => [
      { name: 'Cosmoshub' },
      { name: 'Osmosis' },
      { name: 'Axelar' },
      { name: 'Asset Mantle' },
      { name: 'Altered Carbon' },
      { name: 'Agoric' },
      { name: 'Akash' },
    ],
    []
  );

  const popularZones = useMemo(
    () => [{ name: 'Cosmoshub' }, { name: 'Osmosis' }, { name: 'Axelar' }],
    []
  );

  const filteredPopularZones = useFilteredZones(popularZones, searchValue);

  const filteredZones = useFilteredZones(zonesList, searchValue);

  const { ref, isVisible, setIsVisible } = useComponentVisible<HTMLDivElement>(false);

  const onSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const onSearchClick = () => {
    setIsVisible(true);
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.dropdownContainer}>
        <div ref={ref}>
          <Search
            className={styles.search}
            onSearchChange={onSearchChange}
            onClick={onSearchClick}
            placeholder="Search, analyze and compare appchains"
            showIcon={false}
          />
        </div>
        {isVisible && (
          <ScrollableContainer className={styles.itemsContainer}>
            <div className={styles.groupTitle}>Popular</div>
            {!!searchValue && !filteredPopularZones?.length && (
              <div className={styles.zonesNotFoundContainer}>No zones found.</div>
            )}
            {filteredPopularZones.map((zone) => (
              <Link
                className={cn(styles.zone)}
                key={`zone_${zone.name}`}
                to={`/${getZonesOverviewPath(zone.name)}`}
              >
                <ZoneInfoWithSearch searchValue={searchValue} zone={zone} />
              </Link>
            ))}
            <div className={styles.groupTitle}>Alphabetically</div>
            {!!searchValue && !filteredZones?.length && (
              <div className={styles.zonesNotFoundContainer}>No zones found.</div>
            )}
            {filteredZones.map((zone) => (
              <Link
                className={cn(styles.zone)}
                key={`zone_${zone.name}`}
                to={`/${getZonesOverviewPath(zone.name)}`}
              >
                <ZoneInfoWithSearch searchValue={searchValue} zone={zone} />
              </Link>
            ))}
          </ScrollableContainer>
        )}
      </div>
    </div>
  );
}
