import { useMemo, useState } from 'react';

import { ScrollableContainer, Search, ZoneLinkItemsWithSearch } from 'components';
import { Modal } from 'components/ui/Modal/Modal';
import { useZonesData, ZoneData } from 'hooks/queries/useZonesData';

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

  const [isVisible, setIsVisible] = useState(false);

  const onSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const onSearchClick = () => {
    setIsVisible(true);
  };

  const onModalClose = () => {
    setIsVisible(false);
    setSearchValue('');
  };

  return (
    <>
      {!isVisible && (
        <Search
          className={styles.search}
          onSearchChange={onSearchChange}
          onClick={onSearchClick}
          placeholder="Search zones"
          showIcon={false}
        />
      )}
      <Modal className={styles.searchContainer} isOpen={isVisible} onClose={onModalClose}>
        <Search
          className={styles.search}
          onSearchChange={onSearchChange}
          onClick={onSearchClick}
          placeholder="Search zones"
          showIcon={false}
          autoFocus
        />
        <ScrollableContainer className={styles.itemsContainer}>
          <ZoneLinkItemsWithSearch
            title="Popular"
            zones={popularZones}
            searchValue={searchValue}
            onItemClick={onModalClose}
          />

          <ZoneLinkItemsWithSearch
            title="Alphabetically"
            zones={sortedZones}
            searchValue={searchValue}
            onItemClick={onModalClose}
          />
        </ScrollableContainer>
      </Modal>
    </>
  );
}
