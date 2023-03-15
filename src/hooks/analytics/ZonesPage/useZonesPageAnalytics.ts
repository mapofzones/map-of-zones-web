import { useSortedZonesListAnalytics } from './useSortedZonesListAnalytics';
import { useViewedZonesListPageAnalytics } from './useViewedZonesListPageAnalytics';
import { useSelectedZoneAnalytics } from './ZonePage/useSelectedZoneAnalytics';
import { useSwitchedZoneSubtabAnalytics } from './ZonePage/useSwitchedZoneSubtabAnalytics';
import { useViewedZoneOverviewPageAnalytics } from './ZonePage/ZoneOverviewPage/useViewedZoneOverviewPageAnalytics';
import { useSortedZonePeersListAnalytics } from './ZonePage/ZonePeersPage/useSortedZonePeersListAnalytics';
import { useViewedZonePeersPageAnalytics } from './ZonePage/ZonePeersPage/useViewedZonePeersPageAnalytics';
import { Page } from '../Types';

export function useZonesPageAnalytics(currentPage: Page, prevPage: Page) {
  useSelectedZoneAnalytics(currentPage, prevPage);
  useSwitchedZoneSubtabAnalytics(currentPage, prevPage);

  // zoneOverview
  useViewedZoneOverviewPageAnalytics(currentPage, prevPage);

  // zonePeers
  useSortedZonePeersListAnalytics(currentPage, prevPage);
  useViewedZonePeersPageAnalytics(currentPage, prevPage);

  // zones
  useSortedZonesListAnalytics(currentPage, prevPage);
  useViewedZonesListPageAnalytics(currentPage, prevPage);
}
