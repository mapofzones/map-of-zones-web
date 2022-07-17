import { useMemo } from 'react';

import { useQuery } from '@apollo/client';

import { TotalZonesInfoDocument } from 'graphql/HomePage/__generated__/TotalZonesInfo.generated';
import { ColumnKeys } from 'pages/HomePage/Types';

import { PeriodKeys, PERIODS } from './Types';

export function useTotalZonesInfo(
  selectedPeriod: PeriodKeys,
  selectedColumnKey: ColumnKeys,
  isMainnet = true
) {
  const options = useMemo(
    () => ({
      variables: {
        period: PERIODS[selectedPeriod],
        isMainnet: isMainnet,
        withVolume: selectedColumnKey === ColumnKeys.IbcVolume,
        withTransfers: selectedColumnKey === ColumnKeys.IbcTransfers,
      },
    }),
    [selectedPeriod, selectedColumnKey, isMainnet]
  );

  const { data, loading } = useQuery(TotalZonesInfoDocument, options);

  return useMemo(
    () => ({
      data: data?.headers[0],
      loading,
    }),
    [data, loading]
  );
}
