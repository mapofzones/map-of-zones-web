import { useEffect } from 'react';

import { ZonesTableDataQueryItem } from 'pages/HomePage/Sidebar/ZonesInfo/ZonesInfoTable/ZonesInfoTable.props';

import { trackEvent } from '../useAnalytics';

export function useSearchSidebarAnalytics(
  filteredZones: ZonesTableDataQueryItem[],
  searchValue?: string
) {
  useEffect(() => {
    if (searchValue) {
      trackEvent('search sidebar', {
        searchValue,
        searchStatus:
          filteredZones?.length > 0 ? `finded zones (${filteredZones.length})` : `didn't find`,
      });
    }
  }, [filteredZones, searchValue]);
}
