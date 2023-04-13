import { useCallback, useEffect, useRef, useState } from 'react';

import { motion, useAnimation } from 'framer-motion';

import { ScrollableContainer, ZoneLinkItemsWithSearch } from 'components';
import { Modal } from 'components/ui/Modal/Modal';
import { ZoneData } from 'hooks/queries/useZonesData';
import { useFilteredZones } from 'hooks/useFilteredZones';
import { useTabletSmallMediaQuery } from 'hooks/useMediaQuery';

import styles from './GlobalSearchModal.module.scss';
import { GlobalSearchModalProps } from './GlobalSearchModal.props';
import { GlobalSearchInput } from '../GlobalSearchInput';

interface ActiveItem {
  totalIndex: number | undefined;
  isPopularSelected: boolean;
  isAlpabetSelected: boolean;
  popularIndex: number | undefined;
  alpabetIndex: number | undefined;
}

const POPULAR_ZONE_KEYS = ['osmosis-1', 'cosmoshub-4', 'axelar-dojo-1'];

export function GlobalSearchModal({ isVisible, zones, onModalClose }: GlobalSearchModalProps) {
  const [searchValue, setSearchValue] = useState('');
  const [searchWasChanged, setSearchWasChanged] = useState(false);
  const animationControls = useAnimation();

  const popularZones = zones.filter((zone: ZoneData) => POPULAR_ZONE_KEYS.includes(zone.zone));

  const filteredZones = useFilteredZones(zones, searchValue);
  const filteredPopularZones = useFilteredZones(popularZones, searchValue);

  const onSearchChange = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  useEffect(() => {
    const animate = async () => {
      await animationControls.set({
        maxHeight: 0,
      });
      await animationControls.start({
        maxHeight: '90vh',
        transition: {
          duration: 0.5,
          delay: 0.3,
        },
      });
    };

    if (isVisible) {
      animate();
    }
  }, [animationControls, isVisible]);

  const modalClose = () => {
    setSearchValue('');
    setSearchWasChanged(false);
    onModalClose?.();
  };

  useEffect(() => {
    if (searchValue && !searchWasChanged) {
      setSearchWasChanged(true);
    }
  }, [searchValue, searchWasChanged]);

  useEffect(() => {
    setActiveItem({
      totalIndex: undefined,
      isPopularSelected: false,
      isAlpabetSelected: false,
      popularIndex: undefined,
      alpabetIndex: undefined,
    });
  }, [searchValue]);

  const isTablet = useTabletSmallMediaQuery();

  const modalContainerVariants = isTablet
    ? {
        open: { opacity: 1 },
        collapsed: { opacity: 0 },
      }
    : {
        open: { maxWidth: 620, opacity: 1 },
        collapsed: { maxWidth: 0, opacity: 0 },
      };

  const MotionScrollableContainer = motion(ScrollableContainer);

  const activeItemRef = useRef<HTMLElement>(null);
  const [activeItem, setActiveItem] = useState<ActiveItem>({
    totalIndex: undefined,
    isPopularSelected: false,
    isAlpabetSelected: false,
    popularIndex: undefined,
    alpabetIndex: undefined,
  });

  useEffect(() => {
    if (!activeItemRef.current) return;

    activeItemRef.current.scrollIntoView({
      block: 'center',
    });
  }, [activeItem]);

  const handleArrowKeys = (e: any) => {
    // console.log(e);
    const { key } = e;

    if (key === 'Enter') {
      return;
    }

    let newIndex = 0;
    if (key === 'ArrowUp') {
      const ind = activeItem.totalIndex ?? 0;
      newIndex =
        (ind - 1 + (filteredZones.length + filteredPopularZones.length)) %
        (filteredZones.length + filteredPopularZones.length);
    }

    if (key === 'ArrowDown') {
      const ind = activeItem.totalIndex ?? -1;
      newIndex = (ind + 1) % (filteredZones.length + filteredPopularZones.length);
    }

    const isPopularSelected = newIndex < filteredPopularZones.length;
    const isAlpabetSelected = !isPopularSelected;
    const popularIndex = isPopularSelected ? newIndex : undefined;
    const alpabetIndex = isAlpabetSelected ? newIndex - filteredPopularZones.length : undefined;
    const newActiveItem = {
      totalIndex: newIndex,
      isPopularSelected,
      isAlpabetSelected,
      popularIndex,
      alpabetIndex,
    };
    setActiveItem(newActiveItem);
  };

  return (
    <Modal isOpen={isVisible} onClose={modalClose}>
      <motion.div
        className={styles.searchContainer}
        initial="collapsed"
        animate="open"
        variants={modalContainerVariants}
        transition={{ duration: 0.3 }}
      >
        <GlobalSearchInput
          autoFocus
          onSearchChange={onSearchChange}
          onCancel={onModalClose}
          onKeyDown={handleArrowKeys}
        />
        <MotionScrollableContainer className={styles.itemsContainer}>
          <motion.div animate={animationControls}>
            <ZoneLinkItemsWithSearch
              title="Popular"
              zones={filteredPopularZones}
              activeItemRef={activeItem.isPopularSelected ? activeItemRef : null}
              selectedIndex={activeItem.popularIndex}
              searchValue={searchValue}
              onItemClick={onModalClose}
            />

            <ZoneLinkItemsWithSearch
              title="Alphabetically"
              zones={filteredZones}
              activeItemRef={activeItem.isAlpabetSelected ? activeItemRef : null}
              selectedIndex={activeItem.alpabetIndex}
              searchValue={searchValue}
              onItemClick={onModalClose}
            />
          </motion.div>
        </MotionScrollableContainer>
      </motion.div>
    </Modal>
  );
}
