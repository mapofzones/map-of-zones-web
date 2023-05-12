import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

interface SelectedZones {
  zones: string[];
  onZoneDelete: (zone: string) => void;
  onZoneSelected: (zone: string, index: number) => void;
}

const ZONES_SEARCH_KEY = 'zones';

const SelectedZonesContext = createContext<SelectedZones>({} as SelectedZones);

export function ComparisonSelectedZonesProvider({ children }: { children: ReactNode }) {
  const [search] = useSearchParams();

  const [zones, setZones] = useState<string[]>([]);

  useEffect(() => {
    const zonesSearch = search.getAll(ZONES_SEARCH_KEY);

    const uniqueZones = [...new Set(zonesSearch)];
    setZones(uniqueZones);
  }, [search]);

  useEffect(() => {
    const url = new URL(window.location.toString());
    url.searchParams.delete(ZONES_SEARCH_KEY);
    zones.forEach((value) => url.searchParams.append(ZONES_SEARCH_KEY, value));
    window.history.pushState(null, '', url.toString());
  }, [zones]);

  const onZoneDelete = (zone: string) => {
    setZones((zones) => zones.filter((item) => item !== zone));
  };

  const onZoneSelected = (zone: string, index: number) => {
    setZones((values) => {
      if (!values.includes(zone)) {
        values.splice(index, 1, zone);
        return [...values];
      }
      return values;
    });
  };

  return (
    <SelectedZonesContext.Provider
      value={{
        zones,
        onZoneDelete,
        onZoneSelected,
      }}
    >
      {children}
    </SelectedZonesContext.Provider>
  );
}

export const useComparisonSelectedZones = () => useContext(SelectedZonesContext);
