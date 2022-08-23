import { useMemo } from 'react';

import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { PERIODS_IN_HOURS_BY_KEY } from 'components';
import { ZonePeersDocument } from 'graphql/v1/HomePage/Sidebar/ZoneDetails/__generated__/ZonePeers.query.generated';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

export interface ZonePeer {
  zoneCounterpartyKey: string;
  zoneCounterpartyLogoUrl?: string | null;
  zoneCounterpartyName?: string | null;
  ibcVolumeIn: number;
  volumeInPercent: number;
  volumeOutPercent: number;
  ibcVolumeOut: number;
  ibcVolume: number;
  ibcVolumeInPending: number;
  ibcVolumeOutPending: number;
}

export function useZonePeers() {
  const { zone = '' } = useParams();
  const [selectedPeriod] = useSelectedPeriod();

  const options = {
    variables: { source: zone, period: PERIODS_IN_HOURS_BY_KEY[selectedPeriod] },
    skip: !zone,
  };

  const { data, loading } = useQuery(ZonePeersDocument, options);

  return useMemo(
    () => ({
      data: data?.zonePeers
        ?.map((peer) => {
          const ibcVolume = peer.ibcVolumeIn + peer.ibcVolumeOut;
          return {
            ...peer,
            ibcVolume,
            volumeInPercent: (peer.ibcVolumeIn / ibcVolume) * 100,
            volumeOutPercent: (peer.ibcVolumeOut / ibcVolume) * 100,
          } as ZonePeer;
        })
        .sort((peer1, peer2) => peer2.ibcVolume - peer1.ibcVolume),
      loading,
    }),
    [data, loading]
  );
}
