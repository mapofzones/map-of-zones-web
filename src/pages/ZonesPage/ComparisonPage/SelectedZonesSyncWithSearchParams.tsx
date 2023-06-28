import { ReactNode, useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import { useAppSelector } from 'store/hooks';
import { useSelectedComparisonZonesActionsCreator } from 'store/selectedComparisonZones.slice';

const ZONES_SEARCH_KEY = 'zones';

export function SelectedZonesSyncWithSearchParams({ children }: { children: ReactNode }) {
  const [search] = useSearchParams();

  const selectedZones = useAppSelector((state) => state.selectedComparisonZones);
  const { initiateSelectedZones } = useSelectedComparisonZonesActionsCreator();

  useEffect(() => {
    const zonesSearch = search.getAll(ZONES_SEARCH_KEY);

    const uniqueZones = [...new Set(zonesSearch)];
    initiateSelectedZones(uniqueZones);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const url = new URL(window.location.toString());
    url.searchParams.delete(ZONES_SEARCH_KEY);
    selectedZones.forEach((value) => url.searchParams.append(ZONES_SEARCH_KEY, value));
    window.history.pushState(null, '', url.toString());
  }, [selectedZones]);

  return <>{children}</>;
}
