import { ReactNode } from 'react';

export interface DailyActiveAddressesComparisonCardProps {
  className?: string;
  children?: ReactNode;
}

export type DailyActiveAddressesProperties = 'activeAddressesCount' | 'ibcActiveAddressesCount';
