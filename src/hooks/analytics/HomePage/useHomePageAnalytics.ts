import { useChosenDetailsClickAnalytics } from './useChosenDetailsClickAnalytics';
import { useClosedZoneSidebarAnalytics } from './useClosedZoneSidebarAnalytics';
import { useSortedHomePageZonesListAnalytics } from './useSortedHomePageZonesListAnalytics';
import { useSwitchedMapTypeAnalytics } from './useSwitchedMapTypeAnalytics';
import { useSwitchedSidebarSubtabAnalytics } from './useSwitchedSidebarSubtabAnalytics';
import { useViewedHomePageAnalytics } from './useViewedHomePageAnalytics';
import { useViewedZoneOverviewSidebarAnalytics } from './useViewedZoneOverviewSidebarAnalytics';
import { useViewedZonePeersSidebarAnalytics } from './useViewedZonePeersSidebarAnalytics';
import { Page } from '../Types';

export function useHomePageAnalytics(currentPage: Page, prevPage: Page) {
  useViewedHomePageAnalytics(currentPage, prevPage);
  useSortedHomePageZonesListAnalytics(currentPage, prevPage);
  useViewedZoneOverviewSidebarAnalytics(currentPage, prevPage);
  useViewedZonePeersSidebarAnalytics(currentPage, prevPage);
  useChosenDetailsClickAnalytics(currentPage, prevPage);
  useClosedZoneSidebarAnalytics(currentPage, prevPage);
  useSwitchedSidebarSubtabAnalytics(currentPage, prevPage);
  useSwitchedMapTypeAnalytics(currentPage, prevPage);
}
