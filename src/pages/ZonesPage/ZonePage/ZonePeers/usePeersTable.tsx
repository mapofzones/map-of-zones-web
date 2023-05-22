import { useMemo } from 'react';

import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { ZonesListZonePeersDocument } from 'graphql/v2/ZonesPage/ZonePage/__generated__/ZonePeers.query.generated';
import { ZoneBase } from 'types/models/ZoneDetails';
import { PeriodKeys, PERIODS_IN_HOURS_BY_KEY } from 'types/PeriodKeys';

import { ZoneData } from './TableRow/TableRow.props';
import { BlockchainChannel } from './Types';

interface ZoneQueryResult extends ZoneBase {
  logoUrl?: string | null;
  isUpToDate?: boolean | null;
}

export type ZoneChannelQueryResult = {
  zoneCounterparty: ZoneQueryResult;
  zoneCounterpartyChannelId: string;
  channelId: string;
  clientId: string;
  connectionId: string;
  isOpened: boolean;
  ibcTransfers: number;
  ibcTransfersPending: number;
  ibcTransfersFailed: number;
  ibcTransfersSuccessRate: number;
  ibcVolumeIn: number;
  ibcVolumeInPending: number;
  ibcVolumeOut: number;
  ibcVolumeOutPending: number;
};

export function usePeersTable(selectedPeriod: PeriodKeys): { data: ZoneData[]; loading: boolean } {
  const { zone = '' } = useParams();

  const options = {
    variables: {
      source: zone,
      period: PERIODS_IN_HOURS_BY_KEY[selectedPeriod],
      isMainnet: true,
    },
  };

  const { data, loading } = useQuery(ZonesListZonePeersDocument, options);

  return useMemo(
    () => ({
      data:
        data?.zones
          .filter((zone) => zone.data.zoneChannels && zone.data.zoneChannels.length > 0)
          .map((zone) => {
            const sumData = zone.data.aggregate?.sum;
            const successRate =
              sumData?.ibcTransfers == null ||
              sumData?.ibcTransfersFailed == null ||
              sumData.ibcTransfers + sumData.ibcTransfersFailed === 0
                ? 0
                : (sumData.ibcTransfers / (sumData.ibcTransfers + sumData.ibcTransfersFailed)) *
                  100;

            return (
              zone?.data?.zoneChannels && {
                zone: zone.data.zoneChannels[0].zone,
                zoneCounterpartyKey: zone.data.zoneChannels[0].zoneCounterparty.zone,
                zoneCounterpartyName: zone.data.zoneChannels[0].zoneCounterparty.name,
                zoneCounterpartyLogoUrl: zone.data.zoneChannels[0].zoneCounterparty.logoUrl,
                isZoneCounterpartyUpToDate: zone.data.zoneChannels[0].zoneCounterparty.isUpToDate,
                ibcTransfersSuccessRate: successRate,
                ibcTransfers: sumData?.ibcTransfers,
                ibcTransfersPending: sumData?.ibcTransfersPending,
                ibcTransfersFailed: sumData?.ibcTransfersFailed,
                ibcVolumeIn: sumData?.ibcVolumeIn,
                ibcVolumeInPending: sumData?.ibcVolumeInPending,
                ibcVolumeOut: sumData?.ibcVolumeOut,
                ibcVolumeOutPending: sumData?.ibcVolumeOutPending,
                ibcVolume: sumData?.ibcVolume,
                ibcVolumePending: sumData?.ibcVolumePending,
                channels: zone.data.zoneChannels.map(mapChannel),
              }
            );
          }) ?? [],
      loading,
    }),
    [data?.zones, loading]
  );
}

function mapChannel(channel: BlockchainChannel) {
  return {
    zoneCounterpartyChannelId: channel.zoneCounterpartyChannelId,
    channelId: channel.channelId,
    clientId: channel.channelId,
    connectionId: channel.connectionId,
    isOpened: channel.isOpened,
    ibcTransfers: channel.ibcTransfers,
    ibcTransfersPending: channel.ibcTransfersPending,
    ibcTransfersFailed: channel.ibcTransfersFailed,
    ibcTransfersSuccessRate: channel.ibcTransfersSuccessRate,
    ibcVolumeIn: channel.ibcVolumeIn,
    ibcVolumeInPending: channel.ibcVolumeInPending,
    ibcVolumeOut: channel.ibcVolumeOut,
    ibcVolumeOutPending: channel.ibcVolumeOutPending,
    ibcVolume: channel.ibcVolume,
    ibcVolumePending: channel.ibcVolumePending,
  };
}
