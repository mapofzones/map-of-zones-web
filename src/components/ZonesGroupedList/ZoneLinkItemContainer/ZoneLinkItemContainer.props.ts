import { ReactNode } from 'react';

export interface ZoneLinkItemContainerProps {
  className?: string;
  children?: ReactNode;
  zoneKey: string;
  isActive: boolean;
  onItemClick?: (zoneKey: string) => void;
}
