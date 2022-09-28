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

export function useSortedZonePeersListAnalytics(currentPage: Page, prevPage: Page) {
  useEffect(() => {
    if (currentPage?.title !== PAGE_TITLE.ZonePeers) return;

    if (
      prevPage?.title === PAGE_TITLE.ZonePeers &&
      currentPage.search.columnKey &&
      prevPage?.search.columnKey &&
      currentPage.search.columnKey !== prevPage?.search.columnKey
    ) {
      trackEvent('sorted zone peers list', {
        param: ZONES_PEERS_COLUMN_TITLE[currentPage.search.columnKey as string],
        period: currentPage.search.period,
        zone: currentPage.pathname.split('/')[2],
      });
    }
  }, [currentPage, prevPage]);
}
