import { useMemo } from 'react';

import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { PERIODS_IN_HOURS_BY_KEY } from 'components';
import { ZonePeersDocument } from 'graphql/v2/HomePage/Sidebar/ZoneDetails/__generated__/ZonePeers.query.generated';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

export interface ZonePeer {
  ibcVolumeIn: number;
  ibcVolumeOut: number;
  ibcVolumeInPending: number;
  ibcVolumeOutPending: number;
  blockchain: ZonePeerBlockchain;
  counterpartyBlockchain: ZonePeerBlockchain;

  volumeInPercent: number;
  volumeOutPercent: number;
  ibcVolume: number;
}

export interface ZonePeerBlockchain {
  name: string;
  zone: string;
  logoUrl: string;
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
      data: data?.zonePeers?.map((peer) => {
        const volumeInPercent = (peer.ibcVolumeIn / peer.ibcVolume) * 100;
        const volumeOutPercent = (peer.ibcVolumeOut / peer.ibcVolume) * 100;
        return {
          ...peer,
          volumeInPercent,
          volumeOutPercent,
        } as ZonePeer;
      }),
      loading,
    }),
    [data, loading]
  );
}
