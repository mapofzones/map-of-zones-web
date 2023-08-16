import React, {
  ForwardedRef,
  KeyboardEvent,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';

import cn from 'classnames';

import { NotFoundContainer } from 'components/NotFoundContainer';
import { ZoneLinkItemsGroupWithTitle } from 'components/ZonesGroupedList/ZoneLinkItemsGroupWithTitle';
import { ZoneData } from 'hooks/queries/useZonesData';
import { useFilteredZones } from 'hooks/useFilteredZones';
import { ScrollableContainer } from 'ui';

import {
  ActiveItem,
  calculateActiveItemDetails,
  getDefaultActiveItem,
  getSelectedDetails,
} from './ActiveItem';
import styles from './ZonesGroupedList.module.scss';

import { ZonesGroupedListProps } from '.';

export type KeydownHandle = {
  keydown: (event: KeyboardEvent<HTMLDivElement>) => void;
};

export const POPULAR_ZONE_KEYS = ['osmosis-1', 'cosmoshub-4', 'axelar-dojo-1'];

function ZonesGroupedList(
  { className, style, searchValue, zones, children, onItemSelected }: ZonesGroupedListProps,
  ref: ForwardedRef<KeydownHandle>
) {
  useImperativeHandle(ref, () => ({
    keydown(e: KeyboardEvent<HTMLDivElement>) {
      const { key } = e;

      if (key === 'Enter') {
        e.preventDefault();

        if (activeItem?.selectedZone !== undefined) {
          onItemSelected?.(activeItem?.selectedZone);
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

  const popularZones = zones.filter((zone: ZoneData) => POPULAR_ZONE_KEYS.includes(zone.zone));

  const filteredZones = useFilteredZones(zones, searchValue);
  const filteredPopularZones = useFilteredZones(popularZones, searchValue);

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
    <ScrollableContainer className={cn(styles.itemsContainer, className)} style={style}>
      {(!filteredPopularZones || !filteredPopularZones.length) &&
        (!filteredZones || !filteredZones.length) && (
          <NotFoundContainer className={styles.zonesNotFoundContainer}>
            No zones found.
          </NotFoundContainer>
        )}

      {!!filteredPopularZones.length && (
        <ZoneLinkItemsGroupWithTitle title="Popular">
          {filteredPopularZones.map((zone, index) =>
            children(zone, activeItem.isPopularSelected && index === activeItem.popularIndex)
          )}
        </ZoneLinkItemsGroupWithTitle>
      )}

      {!!filteredZones.length && (
        <ZoneLinkItemsGroupWithTitle title="Alphabetically">
          {filteredZones.map((zone, index) =>
            children(zone, activeItem.isAlpabetSelected && index === activeItem.alphabetIndex)
          )}
        </ZoneLinkItemsGroupWithTitle>
      )}
    </ScrollableContainer>
  );
}

export const ZonesGroupedListWithRef = React.forwardRef<KeydownHandle, ZonesGroupedListProps>(
  ZonesGroupedList
);
