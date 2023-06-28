import { useEffect, useState } from 'react';

import { useZonesData } from 'hooks/queries/useZonesData';
import { useAppSelector } from 'store/hooks';
import { DatasetInfo } from 'ui/Charts/AreaChart/AreaChart.props'; // TODO: use common type

export function useSelectedZonesDetails() {
  const [selectedZonesDetailsByKey, setSelectedZonesDetailsByKey] = useState<
    Record<string, DatasetInfo>
  >({});

  const selectedZones = useAppSelector((state) => state.selectedComparisonZones);
  const { data: zoneDetails } = useZonesData();

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

  return { selectedZones, selectedZonesDetailsByKey };
}

export const ZONES_COLORS = ['#62D0D7', '#B250FF', '#FF9900'];
