import { useEffect } from 'react';

import { ColumnKeys } from 'pages/ZonesPage/ZonesInfo/ZonesTable/Types';

import { Page, PAGE_TITLE } from '../Types';
import { trackEvent } from '../useAnalytics';

const ZONES_PAGE_COLUMN_TITLE: Record<string, string> = {
  [ColumnKeys.ActiveAddresses]: 'active users',
  [ColumnKeys.IbcTransfers]: 'ibc transfers',
  [ColumnKeys.IbcVolume]: 'ibc volume',
  [ColumnKeys.IbcVolumeReceived]: 'volume in',
  [ColumnKeys.IbcVolumeSent]: 'volume out',
  [ColumnKeys.TotalTxs]: 'total txs',
};

export function useSortedZonesListAnalytics(currentPage: Page, prevPage: Page) {
  useEffect(() => {
    if (currentPage?.title !== PAGE_TITLE.ZonesList) return;

    if (
      prevPage?.title === PAGE_TITLE.ZonesList &&
      currentPage.search.columnKey &&
      prevPage?.search.columnKey &&
      currentPage.search.columnKey !== prevPage?.search.columnKey
    ) {
      trackEvent('sorted zones list', {
        param: ZONES_PAGE_COLUMN_TITLE[currentPage.search.columnKey as string],
        period: currentPage.search.period,
      });
    }
  }, [currentPage, prevPage]);
}
