import { ButtonGroupItem } from 'components/ui/ButtonGroup/ButtonGroup.props';

export type ReturnedAddressesChartType = 'total' | 'ibc';

export interface ZoneOverviewReturnedAddressesData {
  returnedRate?: number;
  returnedAddresses?: number;
  prevTotalAddresses?: number;
  ibcReturnedRate?: number;
  ibcReturnedAddresses?: number;
  ibcPrevTotalAddresses?: number;
}

export interface ZoneOverviewReturnedAddressesDataByType {
  returnedRate?: number;
  returnedAddresses?: number;
  prevTotalAddresses?: number;
}

export const chartOptions: ButtonGroupItem<ReturnedAddressesChartType>[] = [
  { key: 'total', title: 'Total' },
  { key: 'ibc', title: 'IBC' },
];
