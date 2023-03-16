import { Page } from '../Types';
import { useSortedAssetsListAnalytics } from './useSortedAssetsListAnalytics';
import { useViewedAssetsPageAnalytics } from './useViewedAssetsPageAnalytics';

export function useAssetsPageAnalytics(currentPage: Page, prevPage: Page) {
  useSortedAssetsListAnalytics(currentPage, prevPage);
  useViewedAssetsPageAnalytics(currentPage, prevPage);
}
