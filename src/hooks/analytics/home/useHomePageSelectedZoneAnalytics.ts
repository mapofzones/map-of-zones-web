import { useCallback } from 'react';

import { useSearchParams } from 'react-router-dom';

import { ColumnKeys } from 'pages/HomePage/Types';

import { trackEvent } from '../useAnalytics';
import { HOME_PAGE_TABLE_COLUMN_TITLE } from './useViewedHomePageAnalytics';

export enum SelectedZoneSourceView {
  Sidebar = 'sidebar view',
  Map = 'map view',
}

export function useHomePageSelectedZoneAnalytics(
  source: SelectedZoneSourceView
): (selectedZone: string | undefined) => void {
  const [searchParams] = useSearchParams();

  const period = searchParams.get('period');
  const columnKey = searchParams.get('columnKey') as ColumnKeys;
  const searchZone = searchParams.get('searchZone');

  const trackSelectedZone = useCallback(
    (selectedZone: string | undefined) => {
      trackEvent('selected zone', {
        period,
        zone: selectedZone,
        param: columnKey ? HOME_PAGE_TABLE_COLUMN_TITLE[columnKey] : '',
        source,
        searchZone,
      });
    },
    [columnKey, period, searchZone, source]
  );

  return trackSelectedZone;
}
