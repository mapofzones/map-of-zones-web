import { useQuery } from '@apollo/client';

import { Zones_Stats_Select_Column } from 'graphql/base-types';
import { ZonesTableDataDocument } from 'graphql/HomePage/__generated__/ZonesTableData.generated';
import { ColumnKeys } from 'pages/HomePage/Types';

import { PeriodKeys, PERIODS } from './Types';
import { ZonesTableDataQueryItem } from './ZonesInfoTable/ZonesInfoTable.props';

export function useZonesTableData(
  selectedPeriod: PeriodKeys,
  selectedColumnKey: ColumnKeys,
  sortingColumnKey: Zones_Stats_Select_Column,
  isMainnet = true
): { data: ZonesTableDataQueryItem[]; loading: boolean } {
  const options = {
    variables: {
      period: PERIODS[selectedPeriod],
      isMainnet: isMainnet,
      orderBy: {
        [sortingColumnKey]: 'asc',
      },
      withVolume: selectedColumnKey === ColumnKeys.IbcVolume,
      withTransfers: selectedColumnKey === ColumnKeys.IbcTransfers,
      withTotalTxs: selectedColumnKey === ColumnKeys.TotalTxs,
    },
  };

  const { data, loading } = useQuery(ZonesTableDataDocument, options);

  return { data: data?.zonesTable ?? [], loading };
}
