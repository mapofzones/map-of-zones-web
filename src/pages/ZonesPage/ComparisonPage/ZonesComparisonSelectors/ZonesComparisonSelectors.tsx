import { useEffect, useState } from 'react';

import cn from 'classnames';
import { useSearchParams } from 'react-router-dom';

import { AddToCompareButton } from 'components/AddToCompareButton';
import { ZonesSelectorWrapper } from 'components/ZonesSelector/ZonesSelectorWrapper';
import { useZonesData } from 'hooks/queries/useZonesData';

import { ComparisonZoneSelector } from './ComparisonZoneSelector';
import styles from './ZonesComparisonSelectors.module.scss';

import { ZonesComparisonSelectorsProps } from '.';

export function ZonesComparisonSelectors({
  className,
  ...props
}: ZonesComparisonSelectorsProps): JSX.Element {
  const [search] = useSearchParams();

  const [zones, setZones] = useState<string[]>([]);

  useEffect(() => {
    const zonesSearch = search.getAll('zones');

    const uniqueZones = [...new Set(zonesSearch)];
    setZones(uniqueZones);
  }, [search]);

  const { data: zonesList, loading } = useZonesData();

  const onZoneDelete = (zone: string) => {
    setZones((zones) => zones.filter((item) => item !== zone));
  };

  useEffect(() => {
    const url = new URL(window.location.toString());
    url.searchParams.delete('zones');
    zones.forEach((value) => url.searchParams.append('zones', value));
    window.history.pushState(null, '', url.toString());
  }, [zones]);

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
    <div className={cn(className, styles.container)} {...props}>
      {zones.map((zone, index) => (
        <ComparisonZoneSelector
          key={zone}
          zone={zone}
          zonesList={zonesList}
          loading={loading}
          onZoneDelete={onZoneDelete}
          onZonesSelected={(newZone) => onZoneSelected(newZone, index)}
        />
      ))}

      {zones.length < 3 && (
        <ZonesSelectorWrapper
          zonesList={zonesList}
          onZoneSelected={(newZone) => onZoneSelected(newZone, zones.length)}
        >
          <AddToCompareButton />
        </ZonesSelectorWrapper>
      )}
    </div>
  );
}
