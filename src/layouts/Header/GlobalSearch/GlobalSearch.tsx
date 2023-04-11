import { useCallback, useEffect, useMemo, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { ScrollableContainer, Search, ZoneLinkItemsWithSearch } from 'components';
import { Modal } from 'components/ui/Modal/Modal';
import { useZonesData, ZoneData } from 'hooks/queries/useZonesData';

import styles from './GlobalSearch.module.scss';

import { GlobalSearchProps } from '.';

const POPULAR_ZONE_KEYS = ['osmosis-1', 'cosmoshub-4', 'axelar-dojo-1'];

const dropdownAnimate = {
  open: {
    opacity: 1,
    rotateX: 0,
    maxHeight: '90vh',
    transition: {
      duration: 1,
    },
  },
  search: {
    opacity: 1,
    rotateX: 0,
    maxHeight: '100%',
    transition: {
      duration: 0.5,
    },
  },
  collapsed: {
    opacity: 0,
    rotateX: -15,
    maxHeight: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};

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

  const onSearchChange = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const onSearchClick = useCallback(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    console.log(isVisible);
  }, [isVisible]);

  const onModalClose = useCallback(() => {
    setIsVisible(false);
    setSearchValue('');
  }, []);

  const MotionScrollableContainer = motion(ScrollableContainer);

  return (
    <>
      {!isVisible && (
        <Search
          className={styles.search}
          onClick={onSearchClick}
          placeholder="Search zones"
          showIcon={false}
        />
      )}
      <Modal isOpen={isVisible} onClose={onModalClose}>
        <motion.div
          className={styles.searchContainer}
          initial="collapsed"
          animate="open"
          variants={{
            open: { width: 620, opacity: 1 },
            collapsed: { width: 0, opacity: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <Search
            className={styles.search}
            onSearchChange={onSearchChange}
            placeholder="Search zones"
            showIcon={false}
            autoFocus
          />
          <MotionScrollableContainer className={styles.itemsContainer}>
            <motion.div
              initial="collapsed"
              animate={isVisible ? (!searchValue ? 'open' : 'search') : 'collapsed'}
              variants={dropdownAnimate}
            >
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
            </motion.div>
          </MotionScrollableContainer>
        </motion.div>
      </Modal>
    </>
  );
}
