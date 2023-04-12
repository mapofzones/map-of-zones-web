import { useCallback, useMemo, useState } from 'react';

import { GlobalSearchIcon } from 'assets/icons';
import { useZonesData, ZoneData } from 'hooks/queries/useZonesData';
import { useTabletSmallMediaQuery } from 'hooks/useMediaQuery';

import styles from './GlobalSearch.module.scss';
import { GlobalSearchInput } from './GlobalSearchInput';
import { GlobalSearchModal } from './GlobalSearchModal/GlobalSearchModal';

import { GlobalSearchProps } from '.';

export function GlobalSearch({ ...props }: GlobalSearchProps) {
  const isTablet = useTabletSmallMediaQuery();

  const { data: zonesList, loading } = useZonesData();
  const sortedZones = useMemo(() => {
    console.log(zonesList);
    const sorted = [...zonesList].sort((a: ZoneData, b: ZoneData) => a.zone.localeCompare(b.zone));
    return sorted;
  }, [zonesList]);

  const [isVisible, setIsVisible] = useState(false);

  const onSearchClick = useCallback(() => {
    setIsVisible(true);
  }, []);

  const onModalClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <>
      {!isVisible && (
        <>
          {!isTablet ? (
            <GlobalSearchInput className={styles.searchControl} onClick={onSearchClick} />
          ) : (
            <GlobalSearchIcon className={styles.globalSearchIcon} onClick={onSearchClick} />
          )}
        </>
      )}
      <GlobalSearchModal isVisible={isVisible} zones={sortedZones} onModalClose={onModalClose} />
    </>
  );
}