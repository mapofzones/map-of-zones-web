import { useCallback } from 'react';

import { useSearchParams } from 'react-router-dom';

import { MapType, DefaultMapType } from 'pages/HomePage/MapContainer/MapContainer.types';
import { ColumnKeys } from 'pages/HomePage/Types';

import { HOME_PAGE_TABLE_COLUMN_TITLE } from './useViewedHomePageAnalytics';
import { trackEvent } from '../useAnalytics';

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
  const mapType = (searchParams.get('mapType') as MapType) ?? DefaultMapType;

  const trackSelectedZone = useCallback(
    (selectedZone: string | undefined) => {
      trackEvent('selected zone', {
        period,
        zone: selectedZone,
        param: columnKey ? HOME_PAGE_TABLE_COLUMN_TITLE[columnKey] : '',
        source,
        searchZone,
        mapType,
      });
    },
    [columnKey, mapType, period, searchZone, source]
  );

  return trackSelectedZone;
}
