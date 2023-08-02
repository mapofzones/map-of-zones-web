import React, {
  ForwardedRef,
  KeyboardEvent,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';

import cn from 'classnames';
import { motion, useAnimation } from 'framer-motion';

import { ZoneLinkItemsWithSearch } from 'components/ZoneLinkItemsWithSearch';
import { ZoneData } from 'hooks/queries/useZonesData';
import { useFilteredZones } from 'hooks/useFilteredZones';
import {
  ActiveItem,
  getDefaultActiveItem,
} from 'layouts/Header/GlobalSearch/GlobalSearchModal/ActiveItem';
import { useActiveItemScroll } from 'layouts/Header/GlobalSearch/GlobalSearchModal/hooks/useActiveItemScroll';
import { ZonesNotFoundContainer } from 'layouts/Header/GlobalSearch/GlobalSearchModal/ZonesNotFoundContainer';
import { ScrollableContainer } from 'ui';

import styles from './ZonesGroupedList.module.scss';

import { ZonesGroupedListProps } from '.';

export type KeydownHandle = {
  keydown: (event: KeyboardEvent<HTMLDivElement>) => void;
};

function ZonesGroupedList(
  { className, searchValue, zones, onItemClick }: ZonesGroupedListProps,
  ref: ForwardedRef<KeydownHandle>
) {
  useImperativeHandle(ref, () => ({
    keydown(e: KeyboardEvent<HTMLDivElement>) {
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

      const newActiveItem = calculateActiveItemDetails(
        newIndex,
        filteredPopularZones,
        filteredZones
      );
      setActiveItem(newActiveItem);
    },
  }));

  const [activeItem, setActiveItem] = useState<ActiveItem>(getDefaultActiveItem());

  const activeItemRef = useActiveItemScroll(activeItem);

  const animationControls = useAnimation();

  const popularZones = zones.filter((zone: ZoneData) => POPULAR_ZONE_KEYS.includes(zone.zone));

  const filteredZones = useFilteredZones(zones, searchValue);
  const filteredPopularZones = useFilteredZones(popularZones, searchValue);

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

    animate();
  }, [animationControls]);

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
    <ScrollableContainer className={cn(styles.itemsContainer, className)}>
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
  );
}

export const POPULAR_ZONE_KEYS = ['osmosis-1', 'cosmoshub-4', 'axelar-dojo-1'];

export const ZonesGroupedListWithRef = React.forwardRef<KeydownHandle, ZonesGroupedListProps>(
  ZonesGroupedList
);
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
