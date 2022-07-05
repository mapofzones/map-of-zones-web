import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface VolumeLineChartProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  volumeInPercent: number;
  volumeOutPercent: number;
  className?: string;
}
