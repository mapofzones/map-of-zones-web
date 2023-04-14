import { useCallback, useEffect, useRef, useState } from 'react';

import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { ScrollableContainer, ZoneLinkItemsWithSearch } from 'components';
import { Modal } from 'components/ui/Modal/Modal';
import { ZoneData } from 'hooks/queries/useZonesData';
import { useFilteredZones } from 'hooks/useFilteredZones';
import { useTabletSmallMediaQuery } from 'hooks/useMediaQuery';
import { getZonesOverviewPath } from 'routing';

import styles from './GlobalSearchModal.module.scss';
import { GlobalSearchModalProps } from './GlobalSearchModal.props';
import { GlobalSearchInput } from '../GlobalSearchInput';

interface ActiveItem {
  totalIndex: number | undefined;
  isPopularSelected: boolean;
  isAlpabetSelected: boolean;
  popularIndex: number | undefined;
  alphabetIndex: number | undefined;
  selectedZone?: string | undefined;
}

const POPULAR_ZONE_KEYS = ['osmosis-1', 'cosmoshub-4', 'axelar-dojo-1'];

export function GlobalSearchModal({ isVisible, zones, onModalClose }: GlobalSearchModalProps) {
  const [searchValue, setSearchValue] = useState('');
  const [searchWasChanged, setSearchWasChanged] = useState(false);
  const animationControls = useAnimation();
  const navigate = useNavigate();

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
    setActiveItem({
      totalIndex: undefined,
      isPopularSelected: false,
      isAlpabetSelected: false,
      popularIndex: undefined,
      alphabetIndex: undefined,
    });
    onModalClose?.();
  };

  useEffect(() => {
    if (searchValue && !searchWasChanged) {
      setSearchWasChanged(true);
    }
  }, [searchValue, searchWasChanged]);

  useEffect(() => {
    if (activeItem?.selectedZone) {
      if (activeItem.isPopularSelected) {
        const index = filteredPopularZones.findIndex(
          (zone: ZoneData) => zone.zone === activeItem.selectedZone
        );
        const isPopularSelected = index >= 0;
        const popularIndex = isPopularSelected ? index : undefined;
        const selectedZone = isPopularSelected ? activeItem.selectedZone : undefined;
        const totalIndex = popularIndex;
        setActiveItem((item: ActiveItem) => {
          return {
            ...item,
            totalIndex,
            isPopularSelected,
            popularIndex,
            selectedZone,
          };
        });
      }
      if (activeItem.isAlpabetSelected) {
        const index = filteredZones.findIndex(
          (zone: ZoneData) => zone.zone === activeItem.selectedZone
        );
        const isAlphabetSelected = index >= 0;
        const alphabetIndex = isAlphabetSelected ? index : undefined;
        const selectedZone = isAlphabetSelected ? activeItem.selectedZone : undefined;
        const totalIndex =
          alphabetIndex !== undefined ? filteredPopularZones.length + alphabetIndex : undefined;
        setActiveItem((item: ActiveItem) => {
          return {
            ...item,
            totalIndex,
            isAlphabetSelected,
            alphabetIndex,
            selectedZone,
          };
        });
      }
    }
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
    alphabetIndex: undefined,
    selectedZone: undefined,
  });

  useEffect(() => {
    if (!activeItemRef.current) return;

    activeItemRef.current.scrollIntoView({
      block: 'center',
    });
  }, [activeItem]);

  const handleArrowKeys = (e: any) => {
    const { key } = e;

    if (key === 'Enter') {
      e.preventDefault();

      if (activeItem?.selectedZone !== undefined) {
        navigate({
          pathname: `/${getZonesOverviewPath(activeItem?.selectedZone)}`,
        });
        modalClose();
      }

      return;
    }

    if (key !== 'ArrowUp' && key !== 'ArrowDown') return;

    let newIndex = 0;
    if (key === 'ArrowUp') {
      e.preventDefault();
      const ind = activeItem.totalIndex ?? 0;
      newIndex =
        (ind - 1 + (filteredZones.length + filteredPopularZones.length)) %
        (filteredZones.length + filteredPopularZones.length);
    }

    if (key === 'ArrowDown') {
      e.preventDefault();
      const ind = activeItem.totalIndex ?? -1;
      newIndex = (ind + 1) % (filteredZones.length + filteredPopularZones.length);
    }

    const isPopularSelected = newIndex < filteredPopularZones.length;
    const isAlpabetSelected = !isPopularSelected;
    const popularIndex = isPopularSelected ? newIndex : undefined;
    const alphabetIndex = isAlpabetSelected ? newIndex - filteredPopularZones.length : undefined;
    const selectedZone =
      popularIndex !== undefined
        ? filteredPopularZones[popularIndex].zone
        : alphabetIndex !== undefined
        ? filteredZones[alphabetIndex].zone
        : undefined;

    const newActiveItem = {
      totalIndex: newIndex,
      isPopularSelected,
      isAlpabetSelected,
      popularIndex,
      alphabetIndex,
      selectedZone,
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
          onCancel={modalClose}
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
              onItemClick={modalClose}
            />

            <ZoneLinkItemsWithSearch
              title="Alphabetically"
              zones={filteredZones}
              activeItemRef={activeItem.isAlpabetSelected ? activeItemRef : null}
              selectedIndex={activeItem.alphabetIndex}
              searchValue={searchValue}
              onItemClick={modalClose}
            />
          </motion.div>
        </MotionScrollableContainer>
      </motion.div>
    </Modal>
  );
}
