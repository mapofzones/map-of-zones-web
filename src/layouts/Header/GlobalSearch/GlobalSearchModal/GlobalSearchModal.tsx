import { KeyboardEvent, useCallback, useEffect, useState } from 'react';

import { motion, useAnimation } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

import { ZoneLinkItemsWithSearch } from 'components';
import { useGlobalSearchItemSelectedAnalytics } from 'hooks/analytics/Multipage/useGlobalSearchItemSelectedAnalytics';
import { SelectedZoneOverviewSource } from 'hooks/analytics/ZonesPage/ZonePage/ZoneOverviewPage/useViewedZoneOverviewPageAnalytics';
import { ZoneData } from 'hooks/queries/useZonesData';
import { useFilteredZones } from 'hooks/useFilteredZones';
import { useTabletSmallMediaQuery } from 'hooks/useMediaQuery';
import { getZonesOverviewPath } from 'routing';
import { ScrollableContainer } from 'ui';
import { Modal } from 'ui/Modal/Modal';

import { ActiveItem, getDefaultActiveItem } from './ActiveItem';
import styles from './GlobalSearchModal.module.scss';
import { GlobalSearchModalProps } from './GlobalSearchModal.props';
import { useActiveItemScroll } from './hooks/useActiveItemScroll';
import { ZonesNotFoundContainer } from './ZonesNotFoundContainer';
import { GlobalSearchInput } from '../GlobalSearchInput';

const POPULAR_ZONE_KEYS = ['osmosis-1', 'cosmoshub-4', 'axelar-dojo-1'];

export function GlobalSearchModal({ isVisible, zones, onModalClose }: GlobalSearchModalProps) {
  const [searchValue, setSearchValue] = useState('');
  const [activeItem, setActiveItem] = useState<ActiveItem>(getDefaultActiveItem());

  const activeItemRef = useActiveItemScroll(activeItem);

  const isTablet = useTabletSmallMediaQuery();
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
        maxHeight: '85vh',
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

  const onModalCloseInternal = () => {
    setSearchValue('');
    setActiveItem(getDefaultActiveItem());
    onModalClose?.();
  };

  const location = useLocation();
  useEffect(() => {
    onModalCloseInternal();
  }, [location]);

  const trackSelectedGlobalSearchItem = useGlobalSearchItemSelectedAnalytics();
  const onItemClick = (zone: string) => {
    navigate(`/${getZonesOverviewPath(zone)}`, {
      state: { source: SelectedZoneOverviewSource.GlobalSearch },
    });
    onModalCloseInternal();
    trackSelectedGlobalSearchItem(zone);
  };

  const modalContainerVariants = isTablet
    ? {
        open: { opacity: 1 },
        collapsed: { opacity: 0 },
      }
    : {
        open: { maxWidth: 620, opacity: 1 },
        collapsed: { maxWidth: 0, opacity: 0 },
      };

  const handleArrowKeys = (e: KeyboardEvent<HTMLDivElement>) => {
    const { key } = e;

    if (key === 'Enter') {
      e.preventDefault();

      if (activeItem?.selectedZone !== undefined) {
        onItemClick(activeItem?.selectedZone);
      }

      return;
    }

    if (key !== 'ArrowUp' && key !== 'ArrowDown') return;

    const totalItemsCount = filteredZones.length + filteredPopularZones.length;
    let newIndex = 0;
    if (key === 'ArrowUp') {
      e.preventDefault();
      const currentIndex = activeItem.totalIndex ?? 0;
      newIndex = (currentIndex - 1 + totalItemsCount) % totalItemsCount;
    }

    if (key === 'ArrowDown') {
      e.preventDefault();
      const currentIndex = activeItem.totalIndex ?? -1;
      newIndex = (currentIndex + 1) % totalItemsCount;
    }

    const newActiveItem = calculateActiveItemDetails(newIndex, filteredPopularZones, filteredZones);
    setActiveItem(newActiveItem);
  };

  useEffect(() => {
    if (activeItem?.selectedZone) {
      if (activeItem.isPopularSelected) {
        const { indexInGroup, isSelected, selectedZone } = getSelectedDetails(
          filteredPopularZones,
          activeItem
        );
        const totalIndex = indexInGroup;
        setActiveItem((item: ActiveItem) => {
          return {
            ...item,
            totalIndex,
            isPopularSelected: isSelected,
            popularIndex: indexInGroup,
            selectedZone,
          };
        });
      } else if (activeItem.isAlpabetSelected) {
        const { indexInGroup, isSelected, selectedZone } = getSelectedDetails(
          filteredZones,
          activeItem
        );
        const totalIndex =
          indexInGroup !== undefined ? filteredPopularZones.length + indexInGroup : undefined;
        setActiveItem((item: ActiveItem) => {
          return {
            ...item,
            totalIndex,
            isAlphabetSelected: isSelected,
            alphabetIndex: indexInGroup,
            selectedZone,
          };
        });
      }
    }
  }, [searchValue]);

  return (
    <Modal isOpen={isVisible} onClose={onModalCloseInternal}>
      <motion.div
        className={styles.searchContainer}
        initial="collapsed"
        animate="open"
        variants={modalContainerVariants}
        transition={{ duration: 0.3 }}
      >
        <GlobalSearchInput
          autoFocus
          showCompareSwitcher
          onSearchChange={onSearchChange}
          onCancel={onModalCloseInternal}
          onKeyDown={handleArrowKeys}
        />
        <ScrollableContainer className={styles.itemsContainer}>
          <motion.div animate={animationControls}>
            {(!filteredPopularZones || !filteredPopularZones.length) &&
              (!filteredZones || !filteredZones.length) && <ZonesNotFoundContainer />}
            <ZoneLinkItemsWithSearch
              title="Popular"
              zones={filteredPopularZones}
              activeItemRef={activeItem.isPopularSelected ? activeItemRef : null}
              selectedIndex={activeItem.popularIndex}
              searchValue={searchValue}
              onItemClick={onItemClick}
            />

            <ZoneLinkItemsWithSearch
              title="Alphabetically"
              zones={filteredZones}
              activeItemRef={activeItem.isAlpabetSelected ? activeItemRef : null}
              selectedIndex={activeItem.alphabetIndex}
              searchValue={searchValue}
              onItemClick={onItemClick}
            />
          </motion.div>
        </ScrollableContainer>
      </motion.div>
    </Modal>
  );
}
function getSelectedDetails(zones: ZoneData[], activeItem: ActiveItem) {
  const index = zones.findIndex((zone: ZoneData) => zone.zone === activeItem.selectedZone);
  const isSelected = index >= 0;
  const indexInGroup = isSelected ? index : undefined;
  const selectedZone = isSelected ? activeItem.selectedZone : undefined;
  return { indexInGroup, isSelected, selectedZone };
}

function calculateActiveItemDetails(
  newIndex: number,
  filteredPopularZones: ZoneData[],
  filteredZones: ZoneData[]
) {
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
  return newActiveItem;
}
