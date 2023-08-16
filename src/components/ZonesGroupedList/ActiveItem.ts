import { ZoneData } from 'hooks/queries/useZonesData';

export interface ActiveItem {
  totalIndex: number | undefined;
  isPopularSelected: boolean;
  isAlpabetSelected: boolean;
  popularIndex: number | undefined;
  alphabetIndex: number | undefined;
  selectedZone?: string | undefined;
}

export function getDefaultActiveItem(): ActiveItem | (() => ActiveItem) {
  return {
    totalIndex: undefined,
    isPopularSelected: false,
    isAlpabetSelected: false,
    popularIndex: undefined,
    alphabetIndex: undefined,
    selectedZone: undefined,
  };
}

export function getSelectedDetails(zones: ZoneData[], activeItem: ActiveItem) {
  const index = zones.findIndex((zone: ZoneData) => zone.zone === activeItem.selectedZone);
  const isSelected = index >= 0;
  const indexInGroup = isSelected ? index : undefined;
  const selectedZone = isSelected ? activeItem.selectedZone : undefined;
  return { indexInGroup, isSelected, selectedZone };
}

// eslint-disable-next-line sort-exports/sort-exports
export function calculateActiveItemDetails(
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
