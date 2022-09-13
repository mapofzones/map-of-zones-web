import { useQuery } from '@apollo/client';

import { PeriodKeys, PERIODS_IN_HOURS_BY_KEY } from 'components';
import { ZonesTableDataDocument } from 'graphql/v2/HomePage/__generated__/ZonesTableData.query.generated';
import { ColumnKeys } from 'pages/HomePage/Types';

import { ZonesTableDataQueryItem } from './ZonesInfoTable/ZonesInfoTable.props';

export function useZonesTableData(
  selectedPeriod: PeriodKeys,
  selectedColumnKey: ColumnKeys,
  isMainnet = true
): { data: ZonesTableDataQueryItem[]; loading: boolean } {
  const options = {
    variables: {
      period: PERIODS_IN_HOURS_BY_KEY[selectedPeriod],
      isMainnet: isMainnet,
      withVolume: selectedColumnKey === ColumnKeys.IbcVolume,
      withTransfers: selectedColumnKey === ColumnKeys.IbcTransfers,
      withTotalTxs: selectedColumnKey === ColumnKeys.TotalTxs,
      withDau: selectedColumnKey === ColumnKeys.Dau,
    },
  };

  const { data, loading } = useQuery(ZonesTableDataDocument, options);

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
