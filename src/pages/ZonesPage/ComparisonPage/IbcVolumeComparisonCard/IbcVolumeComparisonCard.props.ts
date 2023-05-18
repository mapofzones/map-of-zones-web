import { ReactNode } from 'react';

export interface IbcVolumeComparisonCardProps {
  className?: string;
  children?: ReactNode;
}

export type IbcVolumeProperties = 'ibcVolume' | 'ibcVolumeIn' | 'ibcVolumeOut';
