import cn from 'classnames';

import { AddToCompareButton } from 'components/AddToCompareButton';
import { ZonesSelectorWrapper } from 'components/ZonesSelector/ZonesSelectorWrapper';
import { useZonesData } from 'hooks/queries/useZonesData';

import { ComparisonZoneSelector } from './ComparisonZoneSelector';
import styles from './ZonesComparisonSelectors.module.scss';
import { useComparisonSelectedZones } from '../context/ComparisonSelectedZonesProvider';

import { ZonesComparisonSelectorsProps } from '.';

const MAX_ZONES_COUNT = 3;

export function ZonesComparisonSelectors({
  className,
  ...props
}: ZonesComparisonSelectorsProps): JSX.Element {
  const { data: zonesList, loading } = useZonesData();

  const { zones, onZoneDelete, onZoneSelected } = useComparisonSelectedZones();

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

      {zones.length < MAX_ZONES_COUNT && (
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
