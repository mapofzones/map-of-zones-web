import { ButtonGroupItem } from 'ui/ButtonGroup/ButtonGroup.props';

export type ReturnedAddressesCardProperties = 'total' | 'ibc';

export interface ZoneAnalysisReturnedAddressesData {
  returnedRate?: number;
  returnedAddresses?: number;
  prevTotalAddresses?: number;
  ibcReturnedRate?: number;
  ibcReturnedAddresses?: number;
  ibcPrevTotalAddresses?: number;
}

export interface ZoneAnalysisReturnedAddressesDataByType {
  returnedRate?: number;
  returnedAddresses?: number;
  prevTotalAddresses?: number;
}

export const RETURNED_ADDRESSES_PROPERTIES_OPTIONS: ButtonGroupItem<ReturnedAddressesCardProperties>[] =
  [
    { key: 'total', title: 'Total' },
    { key: 'ibc', title: 'IBC' },
  ];
