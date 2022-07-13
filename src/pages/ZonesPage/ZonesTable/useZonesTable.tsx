import { useMemo } from 'react';

import { useQuery } from '@apollo/client';

import { PeriodKeys } from 'components/PeriodSelector/Types';
import { ZonesTableDocument } from 'graphql/ZonesPage/__generated__/ZonesTable.generated';
import { PERIODS } from 'pages/HomePage/Sidebar/ZonesInfo/Types';

import { ZoneData } from './TableRow/TableRow.props';

export function useZonesTable(selectedPeriod: PeriodKeys, isMainnet = true): { data: ZoneData[] } {
  const options = useMemo(
    () => ({
      variables: {
        period: PERIODS[selectedPeriod],
        isMainnet: isMainnet,
      },
    }),
    [selectedPeriod, isMainnet]
  );
  const { data } = useQuery(ZonesTableDocument, options);

  return useMemo(() => ({ data: data?.zonesTable ?? [] }), [data]);
}
