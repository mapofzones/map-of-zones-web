import { useMemo } from 'react';

import { useQuery } from '@apollo/client';

import { PERIODS_IN_HOURS_BY_KEY, PeriodKeys } from 'components';
import { ZonesTableDocument } from 'graphql/v2/ZonesPage/ZonesInfo/__generated__/ZonesTable.query.generated';
import { handleChartByPeriod } from 'utils/ handleChartByPeriod';

import { ZoneData } from './TableRow/TableRow.props';

export function useZonesTable(
  selectedPeriod: PeriodKeys,
  isMainnet = true
): { data: ZoneData[]; loading: boolean } {
  const options = {
    variables: {
      period: PERIODS_IN_HOURS_BY_KEY[selectedPeriod],
      isMainnet: isMainnet,
    },
  };

  const { data, loading } = useQuery(ZonesTableDocument, options);

  return useMemo(
    () => ({
      data:
        data?.zonesTable.map((zone) => ({
          ...zone,
          ...zone.switchedStats[0],
          ibcVolumeChart: handleChartByPeriod(
            zone.switchedStats[0].ibcVolumeChart?.slice(),
            selectedPeriod,
            'volume'
          ),
          ...zone.stats[0],
        })) ?? [],
      loading,
    }),
    [data?.zonesTable, loading, selectedPeriod]
  );
}
