import { useCallback, useMemo, useState } from 'react';

import { motion } from 'framer-motion';

import { ScrollableContainer, Search, ZoneLinkItemsWithSearch } from 'components';
import { Modal } from 'components/ui/Modal/Modal';
import { ZoneData } from 'hooks/queries/useZonesData';
import { useTabletSmallMediaQuery } from 'hooks/useMediaQuery';

import styles from './GlobalSearchModal.module.scss';
import { GlobalSearchModalProps } from './GlobalSearchModalProps';
import { GlobalSearchInput } from '../GlobalSearchInput';

const POPULAR_ZONE_KEYS = ['osmosis-1', 'cosmoshub-4', 'axelar-dojo-1'];

export function GlobalSearchModal({ isVisible, zones, onModalClose }: GlobalSearchModalProps) {
  const [searchValue, setSearchValue] = useState('');

  const onSearchChange = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const modalClose = () => {
    setSearchValue('');
    onModalClose?.();
  };

  const MotionScrollableContainer = motion(ScrollableContainer);

  const isTablet = useTabletSmallMediaQuery();

  const itemsContainerVariants = useMemo(
    () => ({
      open: {
        opacity: 1,
        maxHeight: isTablet ? '60vh' : '90vh',
        rotateX: 0,
        transition: {
          duration: 1,
        },
      },
      search: {
        opacity: 1,
        maxHeight: isTablet ? '60vh' : '90vh',
        rotateX: -15,
        transition: {
          duration: 0.5,
        },
      },
      collapsed: {
        opacity: 0,
        maxHeight: 0,
        rotateX: -15,
        transition: {
          duration: 0.5,
          delay: 0.3,
        },
      },
    }),
    [isTablet]
  );

  const modalContainerVariants = isTablet
    ? {
        open: { opacity: 1 },
        collapsed: { opacity: 0 },
      }
    : {
        open: { maxWidth: 620, opacity: 1 },
        collapsed: { maxWidth: 0, opacity: 0 },
      };

  const popularZones = zones.filter((zone: ZoneData) => POPULAR_ZONE_KEYS.includes(zone.zone));

  return (
    <Modal isOpen={isVisible} onClose={modalClose}>
      <motion.div
        className={styles.searchContainer}
        initial="collapsed"
        animate="open"
        variants={modalContainerVariants}
        transition={{ duration: 0.5 }}
      >
        <GlobalSearchInput onSearchChange={onSearchChange} autoFocus />
        <MotionScrollableContainer className={styles.itemsContainer}>
          <motion.div
            initial="collapsed"
            animate={isVisible ? (!searchValue ? 'open' : 'search') : 'collapsed'}
            variants={itemsContainerVariants}
          >
            <ZoneLinkItemsWithSearch
              title="Popular"
              zones={popularZones}
              searchValue={searchValue}
              onItemClick={onModalClose}
            />

            <ZoneLinkItemsWithSearch
              title="Alphabetically"
              zones={zones}
              searchValue={searchValue}
              onItemClick={onModalClose}
            />
          </motion.div>
        </MotionScrollableContainer>
      </motion.div>
    </Modal>
  );
}
