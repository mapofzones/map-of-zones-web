import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import { useZonesData } from 'hooks/queries/useZonesData';
import { DatasetInfo } from 'types/DatasetInfo';

interface SelectedZones {
  selectedZones: string[];
  selectedZonesDetailsByKey: Record<string, DatasetInfo>;
  deleteZone: (zone: string) => void;
  selectZone: (zone: string, index: number) => void;
}

const ZONES_SEARCH_KEY = 'zones';

export function ComparisonSelectedZonesProvider({ children }: { children: ReactNode }) {
  const [search] = useSearchParams();
  const [selectedZones, setSelectedZones] = useState<string[]>([]);

  const { data: zoneDetails } = useZonesData();

  const selectedZonesDetailsByKey = useMemo(() => {
    const selectedZoneDetails = zoneDetails.filter((zoneData) =>
      selectedZones.includes(zoneData.zone)
    );

    const zonesDetailsResult = selectedZones.reduce((dict, zoneKey, index) => {
      const zoneDetails = selectedZoneDetails.find((zoneData) => zoneData.zone === zoneKey);
      dict[zoneKey] = { title: zoneDetails?.name ?? zoneKey, color: ZONES_COLORS[index] };
      return dict;
    }, {} as Record<string, DatasetInfo>);
    return zonesDetailsResult;
  }, [selectedZones, zoneDetails]);

  useEffect(() => {
    const zonesSearch = search.getAll(ZONES_SEARCH_KEY);

    const uniqueZones = [...new Set(zonesSearch)];

    setSelectedZones(uniqueZones);
  }, [search]);

  useEffect(() => {
    const url = new URL(window.location.toString());
    url.searchParams.delete(ZONES_SEARCH_KEY);
    selectedZones.forEach((value) => url.searchParams.append(ZONES_SEARCH_KEY, value));
    window.history.pushState(null, '', url.toString());
  }, [selectedZones]);

  const selectZone = (zone: string, index: number) => {
    setSelectedZones((values) => {
      if (!values.includes(zone)) {
        const newValues = [...values];
        newValues.splice(index, 1, zone);
        return newValues;
      }
      return values;
    });
  };

  const deleteZone = (zone: string) => {
    setSelectedZones((zones) => zones.filter((item) => item !== zone));
  };

  return (
    <SelectedZonesContext.Provider
      value={{
        selectedZones,
        selectedZonesDetailsByKey,
        deleteZone: deleteZone,
        selectZone: selectZone,
      }}
    >
      {children}
    </SelectedZonesContext.Provider>
  );
}

const SelectedZonesContext = createContext<SelectedZones>({} as SelectedZones);

export const useComparisonSelectedZones = () => useContext(SelectedZonesContext);

export const ZONES_COLORS = ['#62D0D7', '#B250FF', '#FF9900'];
