import { useEffect } from 'react';

import { Page, PAGE_TITLE } from 'hooks/analytics/Types';
import { trackEvent } from 'hooks/analytics/useAnalytics';
import { ColumnKeys } from 'pages/ZonesPage/ZonePage/ZonePeers/Types';

const ZONES_PEERS_COLUMN_TITLE: Record<string, string> = {
  // total ibc volume
  [ColumnKeys.IbcVolumeReceived]: 'receives',
  [ColumnKeys.IbcVolumeSent]: 'sends',
  [ColumnKeys.IbcTransfers]: 'ibc success',
  [ColumnKeys.IbcTransfersPending]: 'ibc pending',
  [ColumnKeys.IbcTransfersFailed]: 'ibc failed',
  [ColumnKeys.SuccessRate]: 'success rate',
};

export function useSwitchedZoneSubtabAnalytics(currentPage: Page, prevPage: Page) {
  useEffect(() => {
    if (!currentPage?.title) return;

    if (
      (currentPage.title === PAGE_TITLE.ZonePeers && prevPage?.title === PAGE_TITLE.ZoneOverview) ||
      (currentPage.title === PAGE_TITLE.ZoneOverview && prevPage?.title === PAGE_TITLE.ZonePeers)
    ) {
      trackEvent('switched zone subtab', {
        zone_subtab: currentPage.title === PAGE_TITLE.ZonePeers ? 'peers' : 'overview',
        param: ZONES_PEERS_COLUMN_TITLE[currentPage.search.columnKey as string],
        period: currentPage.search.period,
        zone: currentPage.pathname.split('/')[2],
      });
    }
  }, [currentPage, prevPage]);
}
