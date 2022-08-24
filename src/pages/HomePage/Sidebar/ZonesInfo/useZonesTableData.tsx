import { useQuery } from '@apollo/client';

import { PeriodKeys, PERIODS_IN_HOURS_BY_KEY } from 'components';
import { Flat_Blockchain_Switched_Stats_Select_Column } from 'graphql/base-types';
import { ZonesTableDataDocument } from 'graphql/v2/HomePage/__generated__/ZonesTableData.query.generated';
import { ColumnKeys } from 'pages/HomePage/Types';

import { ZonesTableDataQueryItem } from './ZonesInfoTable/ZonesInfoTable.props';

export function useZonesTableData(
  selectedPeriod: PeriodKeys,
  selectedColumnKey: ColumnKeys,
  sortingColumnKey: Flat_Blockchain_Switched_Stats_Select_Column,
  isMainnet = true
): { data: ZonesTableDataQueryItem[]; loading: boolean } {
  const options = {
    variables: {
      period: PERIODS_IN_HOURS_BY_KEY[selectedPeriod],
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
  console.log(data);

  return {
    data:
      data?.zonesTable.map((zone) => ({
        name: zone.name,
        zone: zone.zone,
        logoUrl: zone.logoUrl,
        ...zone.switchedStats[0],
        ...zone.stats[0],
      })) ?? [],
    loading,
  };
}
