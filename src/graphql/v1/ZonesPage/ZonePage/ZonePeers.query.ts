import { gql } from '@apollo/client';

import { ZONE_PEERS_SHORT_INFO_FRAGMENT } from 'graphql/v1/HomePage/Sidebar/ZoneDetails/ZonePeersShortInfo.fragment';

export const ZONES_LIST_ZONE_PEERS = gql`
  ${ZONE_PEERS_SHORT_INFO_FRAGMENT}
  query ZonesListZonePeers(
    $source: String!
    $orderBy: ft_channel_group_stats_order_by!
    $period: Int!
  ) {
    zonePeers: ft_channel_group_stats(
      where: {
        zone: { _eq: $source }
        timeframe: { _eq: $period }
        is_zone_counterparty_mainnet: { _eq: true }
      }
      order_by: [$orderBy]
    ) {
      ...ZonePeersShortInfo
      ibcTransfers: ibc_tx
      ibcTransfersPending: ibc_tx_pending
      ibcTransfersFailed: ibc_tx_failed
      isZoneCounterpartyUpToDate: is_zone_counterparty_up_to_date
      successRate: ibc_tx_success_rate
    }
    zoneChannels: ft_channels_stats(
      where: {
        zone: { _eq: $source }
        timeframe: { _eq: $period }
        is_zone_counterparty_mainnet: { _eq: true }
      }
    ) {
      channelId: channel_id
      clientId: client_id
      connectionId: connection_id
      ibcTransfers: ibc_tx
      ibcTransfersFailed: ibc_tx_failed
      ibcTransfersPending: ibc_tx_pending
      ibcVolumeIn: ibc_cashflow_in
      ibcVolumeInPending: ibc_cashflow_in_pending
      ibcVolumeOut: ibc_cashflow_out
      ibcVolumeOutPending: ibc_cashflow_out_pending
      isOpened: is_opened
      successRate: ibc_tx_success_rate
      zoneCounterpartyChannelId: zone_counterparty_channel_id
      zoneCounterpartyKey: zone_counterparty
    }
  }
`;
