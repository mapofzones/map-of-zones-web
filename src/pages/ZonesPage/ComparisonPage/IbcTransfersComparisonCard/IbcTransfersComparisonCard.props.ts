import { ReactNode } from 'react';

export interface IbcTransfersComparisonCardProps {
  className?: string;
  children?: ReactNode;
}

export type IbcTransfersProperties = 'ibcTransfers' | 'ibcTransfersIn' | 'ibcTransfersOut';
