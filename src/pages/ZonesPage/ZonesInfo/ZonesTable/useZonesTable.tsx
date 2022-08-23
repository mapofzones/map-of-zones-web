import { useMemo } from 'react';

import { useQuery } from '@apollo/client';

import { PERIODS_IN_HOURS_BY_KEY, PeriodKeys } from 'components';
import { Zones_Stats_Select_Column } from 'graphql/base-types';
import { ZonesTableDocument } from 'graphql/v1/ZonesPage/ZonesInfo/__generated__/ZonesTable.query.generated';

import { ZoneData } from './TableRow/TableRow.props';

export function useZonesTable(
  selectedPeriod: PeriodKeys,
  sortingColumnKey: Zones_Stats_Select_Column,
  isMainnet = true
): { data: ZoneData[] } {
  const options = {
    variables: {
      period: PERIODS_IN_HOURS_BY_KEY[selectedPeriod],
      isMainnet: isMainnet,
      orderBy: {
        [sortingColumnKey]: 'asc',
      },
    },
  };

  const { data } = useQuery(ZonesTableDocument, options);

  return useMemo(() => ({ data: data?.zonesTable ?? [] }), [data]);
}
