import { useQuery } from '@apollo/client';

import { TotalZonesInfoDocument } from 'graphql/HomePage/__generated__/TotalZonesInfo.generated';
import { ColumnKeys } from 'pages/HomePage/Types';

import { PeriodKeys, PERIODS } from './Types';

export function useTotalZonesInfo(
  selectedPeriod: PeriodKeys,
  selectedColumnKey: ColumnKeys,
  isMainnet = true
) {
  const options = {
    variables: {
      period: PERIODS[selectedPeriod],
      isMainnet: isMainnet,
      withVolume: selectedColumnKey === ColumnKeys.IbcVolume,
      withTransfers: selectedColumnKey === ColumnKeys.IbcTransfers,
    },
  };

  const { data, loading } = useQuery(TotalZonesInfoDocument, options);

  return {
    data: data?.headers[0],
    loading,
  };
}
