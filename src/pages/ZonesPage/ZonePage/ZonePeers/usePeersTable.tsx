import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { PeriodKeys, PERIODS_IN_HOURS_BY_KEY } from 'components/PeriodSelector/Types';
import { Ft_Channel_Group_Stats_Select_Column } from 'graphql/base-types';
import { ZonesListZonePeersDocument } from 'graphql/ZonesPage/ZonePage/__generated__/ZonePeers.generated';

import { ZoneData } from './TableRow/TableRow.props';

export function usePeersTable(
  selectedPeriod: PeriodKeys,
  sortingColumnKey: Ft_Channel_Group_Stats_Select_Column
): { data: ZoneData[] } {
  const { zone = '' } = useParams();

  const options = {
    variables: {
      source: zone,
      period: PERIODS_IN_HOURS_BY_KEY[selectedPeriod],
      orderBy: {
        [sortingColumnKey]: 'desc',
      },
    },
  };

  const { data } = useQuery(ZonesListZonePeersDocument, options);

  return {
    data: (data?.zonePeers ?? []).map((zone) => ({
      ...zone,
      channels: (data?.zoneChannels ?? []).filter(
        (channel) => channel.zoneCounterpartyKey === zone.zoneCounterpartyKey
      ),
    })),
  };
}
