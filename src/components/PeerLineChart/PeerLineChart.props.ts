import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PeerLineChartProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  zone: ZoneData;
  counterparty: CounterpartyData;
  className?: string;
}

interface ZoneData {
  name?: string | null;
  logoUrl?: string | null;
}

interface CounterpartyData {
  zoneCounterpartyName?: string | null;
  zoneCounterpartyLogoUrl?: string | null;
  volumeInPercent: number;
  volumeOutPercent: number;
}
