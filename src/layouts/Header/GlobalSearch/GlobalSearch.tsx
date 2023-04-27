import { useCallback, useMemo, useState } from 'react';

import { GlobalSearchIcon } from 'assets/icons';
import { useZonesData, ZoneData } from 'hooks/queries/useZonesData';
import { useTabletMediumMediaQuery } from 'hooks/useMediaQuery';

import styles from './GlobalSearch.module.scss';
import { GlobalSearchInput } from './GlobalSearchInput';
import { GlobalSearchModal } from './GlobalSearchModal/GlobalSearchModal';

import { GlobalSearchProps } from '.';

export function GlobalSearch({ ...props }: GlobalSearchProps) {
  const isTablet = useTabletMediumMediaQuery();

  const { data: zonesList, loading } = useZonesData();
  const sortedZones = useMemo(() => {
    return [...zonesList].sort((a: ZoneData, b: ZoneData) => a.zone.localeCompare(b.zone));
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
