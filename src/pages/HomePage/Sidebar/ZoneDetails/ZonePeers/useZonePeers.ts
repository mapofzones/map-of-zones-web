import { useMemo } from 'react';

import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { PERIODS_IN_HOURS_BY_KEY } from 'components';
import { ZonePeersSidebarDocument } from 'graphql/v2/HomePage/Sidebar/ZoneDetails/__generated__/ZonePeers.query.generated';
import { useMainnet } from 'hooks/useMainnet';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { ZoneBase } from 'types/models/ZoneDetails';

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

export interface ZonePeerBlockchain extends ZoneBase {
  logoUrl?: string | null;
}

export function useZonePeers(): {
  data: ZonePeer[];
  loading: boolean;
} {
  const { zone = '' } = useParams();
  const [selectedPeriod] = useSelectedPeriod(true);
  const [isMainnet] = useMainnet();

  const options = {
    variables: { source: zone, period: PERIODS_IN_HOURS_BY_KEY[selectedPeriod], isMainnet },
    skip: !zone,
  };

  const { data, loading } = useQuery(ZonePeersSidebarDocument, options);

  return useMemo(
    () => ({
      data:
        data?.zones
          .filter((zone) => zone.data.zoneChannels && zone.data.zoneChannels.length > 0)
          .map((zone) => {
            const sumData = zone.data.aggregate?.sum;
            const volumeInPercent =
              sumData?.ibcVolumeIn && sumData?.ibcVolume
                ? (sumData.ibcVolumeIn / sumData.ibcVolume) * 100
                : 0;
            const volumeOutPercent =
              sumData?.ibcVolumeOut && sumData?.ibcVolume
                ? (sumData.ibcVolumeOut / sumData.ibcVolume) * 100
                : 0;

            return (
              zone?.data?.zoneChannels && {
                ibcVolume: sumData?.ibcVolume,
                ibcVolumeIn: sumData?.ibcVolumeIn,
                ibcVolumeInPending: sumData?.ibcVolumeInPending,
                ibcVolumeOut: sumData?.ibcVolumeOut,
                ibcVolumeOutPending: sumData?.ibcVolumeOutPending,
                blockchain: zone.data.zoneChannels[0].blockchain,
                counterpartyBlockchain: zone.data.zoneChannels[0].counterpartyBlockchain,
                volumeInPercent: volumeInPercent,
                volumeOutPercent: volumeOutPercent,
              }
            );
          }) ?? [],
      loading,
    }),
    [data, loading]
  );
}
