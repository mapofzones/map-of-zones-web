import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface OverviewReturnedAddressesChartProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  loading?: boolean;
  returnedRate: number | undefined;
}
