import { useQuery } from '@apollo/client';
import _ from 'lodash';
import { useParams } from 'react-router-dom';

import { PeriodKeys, PERIODS_IN_HOURS_BY_KEY } from 'components/PeriodSelector/Types';
import { ZonesListZonePeersDocument } from 'graphql/v2/ZonesPage/ZonePage/__generated__/ZonePeers.query.generated';

import { ZoneData } from './TableRow/TableRow.props';
import { ColumnKeys } from './Types';

type ZoneQueryResult = {
  name: string;
  zone: string;
  logoUrl?: string | null;
  isUpToDate?: boolean | null;
};

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

export function usePeersTable(
  selectedPeriod: PeriodKeys,
  selectedColumnKey: ColumnKeys
): { data: ZoneData[] } {
  const { zone = '' } = useParams();

  const options = {
    variables: {
      source: zone,
      period: PERIODS_IN_HOURS_BY_KEY[selectedPeriod],
      isMainnet: true,
    },
  };

  const { data } = useQuery(ZonesListZonePeersDocument, options);

  return {
    data:
      data?.zones
        .filter((zone) => zone.data.zoneChannels && zone.data.zoneChannels.length > 0)
        .map((zone) => {
          const sumData = zone.data.aggregate?.sum;
          const ibcVolume = sumData ? sumData?.ibcVolumeIn + sumData?.ibcVolumeOut : 0;
          const ibcVolumePending = sumData
            ? sumData?.ibcVolumeInPending + sumData?.ibcVolumeOutPending
            : 0;

          return (
            zone?.data?.zoneChannels && {
              zone: zone.data.zoneChannels[0].zone,
              zoneCounterpartyKey: zone.data.zoneChannels[0].zoneCounterparty.zone,
              zoneCounterpartyName: zone.data.zoneChannels[0].zoneCounterparty.name,
              zoneCounterpartyLogoUrl: zone.data.zoneChannels[0].zoneCounterparty.logoUrl,
              isZoneCounterpartyUpToDate: zone.data.zoneChannels[0].zoneCounterparty.isUpToDate,
              ibcTransfersSuccessRate: zone.data.aggregate?.avg?.ibcTransfersSuccessRate,
              ibcTransfers: sumData?.ibcTransfers,
              ibcTransfersPending: sumData?.ibcTransfersPending,
              ibcTransfersFailed: sumData?.ibcTransfersFailed,
              ibcVolumeIn: sumData?.ibcVolumeIn,
              ibcVolumeInPending: sumData?.ibcVolumeInPending,
              ibcVolumeOut: sumData?.ibcVolumeOut,
              ibcVolumeOutPending: sumData?.ibcVolumeOutPending,
              ibcVolume: ibcVolume,
              ibcVolumePending: ibcVolumePending,
              channels: zone.data.zoneChannels.map((channel) => {
                const channelVolume = channel.ibcVolumeIn + channel.ibcVolumeOut;
                const channelVolumePending =
                  channel.ibcVolumeInPending + channel.ibcVolumeOutPending;

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
                  ibcVolume: channelVolume,
                  ibcVolumePending: channelVolumePending,
                };
              }),
            }
          );
        }) ?? [],
  };
}
