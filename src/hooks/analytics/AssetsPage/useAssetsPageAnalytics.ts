import { useSortedAssetsListAnalytics } from './useSortedAssetsListAnalytics';
import { useViewedAssetsPageAnalytics } from './useViewedAssetsPageAnalytics';
import { Page } from '../Types';

export function useAssetsPageAnalytics(currentPage: Page, prevPage: Page) {
  useSortedAssetsListAnalytics(currentPage, prevPage);
  useViewedAssetsPageAnalytics(currentPage, prevPage);
}
