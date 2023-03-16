import { Page } from '../Types';
import { useChangedPeriodAnalytics } from './useChangedPeriodAnalytics';
import { useChangedZoneAnalytics } from './useChangedZoneAnalytics';
import { usePageScrollAnalytics } from './usePageScrollAnalytics';
import { useViewedApplicationPageAnalytics } from './useViewedApplicationPageAnalytics';

export function useMultipageAnalytics(currentPage: Page, prevPage: Page, history: Page[]) {
  useChangedPeriodAnalytics(currentPage, prevPage);
  usePageScrollAnalytics(currentPage);
  useViewedApplicationPageAnalytics(currentPage, prevPage, history);
  useChangedZoneAnalytics(currentPage, prevPage);
}
