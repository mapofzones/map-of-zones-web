import { ReactNode, useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import { useActions, useAppSelector } from 'hooks/redux';

import { ZONES_SEARCH_KEY } from './hooks/useSelectedZonesDetails';

export function SelectedZonesSyncWithSearchParams({ children }: { children: ReactNode }) {
  const [search] = useSearchParams();

  const selectedZones = useAppSelector((state) => state.selectedComparisonZones);
  const { initiateSelectedZones } = useActions();

  useEffect(() => {
    const zonesSearch = search.getAll(ZONES_SEARCH_KEY);

    const uniqueZones = [...new Set(zonesSearch)];
    initiateSelectedZones(uniqueZones);
  }, []);

  useEffect(() => {
    const url = new URL(window.location.toString());
    url.searchParams.delete(ZONES_SEARCH_KEY);
    selectedZones.forEach((value) => url.searchParams.append(ZONES_SEARCH_KEY, value));
    window.history.pushState(null, '', url.toString());
  }, [selectedZones]);

  return <>{children}</>;
}
