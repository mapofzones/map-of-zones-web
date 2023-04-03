import { useTabletSmallMediaQuery } from './useMediaQuery';

export function useShowMap() {
  const isTableSmall = useTabletSmallMediaQuery();
  return !isTableSmall;
}
