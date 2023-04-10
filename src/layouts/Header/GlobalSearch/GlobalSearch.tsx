import { useMemo, useState } from 'react';

import { ScrollableContainer, Search, ZoneLinkItemsWithSearch } from 'components';
import { useZonesData, ZoneData } from 'hooks/queries/useZonesData';
import { useComponentVisible } from 'hooks/useComponentVisible';

import styles from './GlobalSearch.module.scss';

import { GlobalSearchProps } from '.';

const POPULAR_ZONE_KEYS = ['osmosis-1', 'cosmoshub-4', 'axelar-dojo-1'];

export function GlobalSearch({ ...props }: GlobalSearchProps) {
  const [searchValue, setSearchValue] = useState('');

  const { data: zonesList, loading } = useZonesData();
  const sortedZones = useMemo(() => {
    console.log(zonesList);
    const sorted = [...zonesList].sort((a: ZoneData, b: ZoneData) => a.zone.localeCompare(b.zone));
    return sorted;
  }, [zonesList]);

  const popularZones = sortedZones.filter((zone: ZoneData) =>
    POPULAR_ZONE_KEYS.includes(zone.zone)
  );

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
            <ZoneLinkItemsWithSearch
              title="Popular"
              zones={popularZones}
              searchValue={searchValue}
            />

            <ZoneLinkItemsWithSearch
              title="Alphabetically"
              zones={sortedZones}
              searchValue={searchValue}
            />
          </ScrollableContainer>
        )}
      </div>
    </div>
  );
}
