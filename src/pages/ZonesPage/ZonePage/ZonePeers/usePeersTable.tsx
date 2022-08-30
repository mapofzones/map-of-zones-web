import { useQuery } from '@apollo/client';
import _ from 'lodash';
import groupBy from 'lodash/groupBy';
import { useParams } from 'react-router-dom';

import { PeriodKeys, PERIODS_IN_HOURS_BY_KEY } from 'components/PeriodSelector/Types';
import { ZonesListZonePeersDocument } from 'graphql/v2/ZonesPage/ZonePage/__generated__/ZonePeers.query.generated';
import { SortRow } from 'hooks/useSortedTableData';

import { ChannelData } from './TableRow/ChannelRow/ChannelRow.props';
import { ZoneData } from './TableRow/TableRow.props';
import { ColumnKeys, SORTING_COLUMN_KEYS } from './Types';

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
    },
  };

  const { data } = useQuery(ZonesListZonePeersDocument, options);

  const grouppedChannelsByZone = groupBy(data?.zoneChannels, 'zoneCounterparty.zone');

  return {
    data: Object.entries(grouppedChannelsByZone).map(
      ([_key, channels]: [string, ZoneChannelQueryResult[]]) => {
        const volumeInSum = _.sumBy(channels, (channel) => channel.ibcVolumeIn);
        const volumeInPendingSum = _.sumBy(channels, (channel) => channel.ibcVolumeInPending);
        const volumeOutSum = _.sumBy(channels, (channel) => channel.ibcVolumeOut);
        const volumeOutPendingSum = _.sumBy(channels, (channel) => channel.ibcVolumeOutPending);

        return {
          zoneCounterpartyKey: channels[0]?.zoneCounterparty?.zone,
          zoneCounterpartyLogoUrl: channels[0]?.zoneCounterparty?.logoUrl,
          zoneCounterpartyName: channels[0]?.zoneCounterparty?.name,
          isZoneCounterpartyUpToDate: channels[0]?.zoneCounterparty?.isUpToDate,
          ibcVolume: volumeInSum + volumeOutSum,
          ibcVolumePending: volumeInPendingSum + volumeOutPendingSum,
          ibcVolumeIn: volumeInSum,
          ibcVolumeInPending: volumeInPendingSum,
          ibcVolumeOut: volumeOutSum,
          ibcVolumeOutPending: volumeOutPendingSum,
          ibcTransfers: _.sumBy(channels, (channel) => channel.ibcTransfers),
          ibcTransfersPending: _.sumBy(channels, (channel) => channel.ibcTransfersPending),
          ibcTransfersFailed: _.sumBy(channels, (channel) => channel.ibcTransfersFailed),
          successRate: _.sumBy(channels, (channel) => channel.ibcTransfersSuccessRate),
          channels: channels
            .map(
              (channel) =>
                ({
                  ...channel,
                  ibcVolume: channel.ibcVolumeIn + channel.ibcVolumeOut,
                  ibcVolumePending: channel.ibcVolumeInPending + channel.ibcVolumeOutPending,
                } as ChannelData)
            )
            .sort((a, b) => SortRow(a, b, selectedColumnKey)),
        };
      }
    ),
  };
}
