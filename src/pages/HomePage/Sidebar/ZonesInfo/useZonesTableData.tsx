import { useMemo } from 'react';

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
): { data: ZonesTableDataQueryItem[] } {
  const options = useMemo(
    () => ({
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
    }),
    [selectedPeriod, selectedColumnKey, sortingColumnKey, isMainnet]
  );
  const { data } = useQuery(ZonesTableDataDocument, options);

  return useMemo(() => ({ data: data?.zonesTable ?? [] }), [data]);
}
