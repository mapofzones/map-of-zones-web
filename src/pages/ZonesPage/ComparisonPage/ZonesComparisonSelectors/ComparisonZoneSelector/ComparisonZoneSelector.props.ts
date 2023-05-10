import { ZonesSelectorProps } from 'components/ZonesSelector';

export interface ComparisonZoneSelectorProps extends ZonesSelectorProps {
  onZoneDelete?: (zone: string) => void;
}
