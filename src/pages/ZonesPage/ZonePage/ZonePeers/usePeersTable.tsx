import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { PeriodKeys, PERIODS_IN_HOURS_BY_KEY } from 'components/PeriodSelector/Types';
import { ZonesListZonePeersDocument } from 'graphql/ZonesPage/ZonePage/__generated__/ZonePeers.generated';

import { ColumnKeys, SORTING_COLUMN_KEYS } from './TableHeader/Types';
import { ZoneData } from './TableRow/TableRow.props';

export function usePeersTable(
  selectedPeriod: PeriodKeys,
  selectedColumnKey: ColumnKeys
): { data: ZoneData[] } {
  const { zone = '' } = useParams();

  const options = {
    variables: {
      source: zone,
      period: PERIODS_IN_HOURS_BY_KEY[selectedPeriod],
      orderBy: {
        [SORTING_COLUMN_KEYS[selectedColumnKey]]: 'desc',
      },
    },
  };

  const { data } = useQuery(ZonesListZonePeersDocument, options);

  return {
    data: (data?.zonePeers ?? []).map((zone) => ({
      ...zone,
      channels: (data?.zoneChannels ?? [])
        .filter((channel) => channel.zoneCounterpartyKey === zone.zoneCounterpartyKey)
        .sort((a, b) => b[selectedColumnKey] - a[selectedColumnKey]),
    })),
  };
}
