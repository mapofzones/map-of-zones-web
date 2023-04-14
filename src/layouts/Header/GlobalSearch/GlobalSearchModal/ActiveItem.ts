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
