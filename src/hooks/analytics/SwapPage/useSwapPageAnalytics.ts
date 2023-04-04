import { useViewedSwapPageAnalytics } from './useViewedSwapPageAnalytics';
import { Page } from '../Types';

export function useSwapPageAnalytics(currentPage: Page, prevPage: Page) {
  useViewedSwapPageAnalytics(currentPage, prevPage);
}
