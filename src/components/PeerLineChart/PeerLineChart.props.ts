import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PeerLineChartProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  zone: ZoneData;
  counterparty: ZoneData;
  volumeInPercent: number;
  volumeOutPercent: number;
  className?: string;
}

interface ZoneData {
  name?: string | null;
  logoUrl?: string | null;
}
