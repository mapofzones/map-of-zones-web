import { ZonesSelectorProps } from 'components/ZonesSelector';

export interface ComparisonZoneSelectorProps extends ZonesSelectorProps {
  color?: string;
  onZoneDelete?: (zone: string) => void;
}
