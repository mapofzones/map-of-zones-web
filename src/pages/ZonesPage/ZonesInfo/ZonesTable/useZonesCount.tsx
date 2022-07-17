import { useMemo } from 'react';

import { useQuery } from '@apollo/client';

import { PeriodKeys } from 'components/PeriodSelector/Types';
import { ZonesCountDocument } from 'graphql/ZonesPage/ZonesInfo/__generated__/ZonesCount.generated';
import { PERIODS } from 'pages/HomePage/Sidebar/ZonesInfo/Types';

export function useZonesCount(selectedPeriod: PeriodKeys, isMainnet = true) {
  const options = useMemo(
    () => ({
      variables: {
        period: PERIODS[selectedPeriod],
        isMainnet: isMainnet,
      },
    }),
    [selectedPeriod, isMainnet]
  );

  const { data } = useQuery(ZonesCountDocument, options);

  return useMemo(
    () => ({
      data: data?.headers[0],
    }),
    [data]
  );
}
