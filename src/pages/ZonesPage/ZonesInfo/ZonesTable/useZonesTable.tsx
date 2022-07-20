import { useMemo } from 'react';

import { useQuery } from '@apollo/client';

import { PeriodKeys } from 'components/PeriodSelector/Types';
import { Zones_Stats_Select_Column } from 'graphql/base-types';
import { ZonesTableDocument } from 'graphql/ZonesPage/ZonesInfo/__generated__/ZonesTable.generated';
import { PERIODS } from 'pages/HomePage/Sidebar/ZonesInfo/Types';

import { ZoneData } from './TableRow/TableRow.props';

export function useZonesTable(
  selectedPeriod: PeriodKeys,
  sortingColumnKey: Zones_Stats_Select_Column,
  isMainnet = true
): { data: ZoneData[] } {
  const options = {
    variables: {
      period: PERIODS[selectedPeriod],
      isMainnet: isMainnet,
      orderBy: {
        [sortingColumnKey]: 'asc',
      },
    },
  };

  const { data } = useQuery(ZonesTableDocument, options);

  return useMemo(() => ({ data: data?.zonesTable ?? [] }), [data]);
}
