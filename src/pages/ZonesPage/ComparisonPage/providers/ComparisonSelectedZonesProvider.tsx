import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import { useZonesData } from 'hooks/queries/useZonesData';
import { DatasetInfo } from 'ui/Charts/AreaChart/AreaChart.props';

interface SelectedZones {
  selectedZones: string[];
  selectedZonesDetailsByKey: Record<string, DatasetInfo>;
  onZoneDelete: (zone: string) => void;
  onZoneSelected: (zone: string, index: number) => void;
}

const ZONES_SEARCH_KEY = 'zones';

const ZONES_COLORS = ['#62D0D7', '#B250FF', '#FF9900'];

const SelectedZonesContext = createContext<SelectedZones>({} as SelectedZones);

export function ComparisonSelectedZonesProvider({ children }: { children: ReactNode }) {
  const [search] = useSearchParams();

  const { data: zoneDetails } = useZonesData();

  const [selectedZones, setSelectedZones] = useState<string[]>([]);
  const [selectedZonesDetailsByKey, setSelectedZonesDetailsByKey] = useState<
    Record<string, DatasetInfo>
  >({});

  useEffect(() => {
    const selectedZoneDetails = zoneDetails.filter((zoneData) =>
      selectedZones.includes(zoneData.zone)
    );
    const zonesDetailsResult = selectedZones.reduce((dict, zoneKey, index) => {
      const zoneDetails = selectedZoneDetails.find((zoneData) => zoneData.zone === zoneKey);
      dict[zoneKey] = { title: zoneDetails?.name ?? zoneKey, color: ZONES_COLORS[index] };
      return dict;
    }, {} as Record<string, DatasetInfo>);
    setSelectedZonesDetailsByKey(zonesDetailsResult);
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

  const onZoneDelete = (zone: string) => {
    setSelectedZones((zones) => zones.filter((item) => item !== zone));
  };

  const onZoneSelected = (zone: string, index: number) => {
    setSelectedZones((values) => {
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
        selectedZones,
        selectedZonesDetailsByKey,
        onZoneDelete,
        onZoneSelected,
      }}
    >
      {children}
    </SelectedZonesContext.Provider>
  );
}

export const useComparisonSelectedZones = () => useContext(SelectedZonesContext);
