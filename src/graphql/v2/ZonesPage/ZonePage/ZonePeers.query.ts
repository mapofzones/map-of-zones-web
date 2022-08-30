import { gql } from '@apollo/client';

export const ZONES_LIST_ZONE_PEERS = gql`
  query ZonesListZonePeers($source: String!, $period: Int!) {
    # zonePeers: flat_channels_stats_aggregate(
    #   where: {
    #     blockchain: { _eq: $source }
    #     timeframe: { _eq: $period }
    #     blockchainByCounterpartyBlockchain: { is_mainnet: { _eq: true } }
    #   }
    #   order_by: [$orderBy]
    # ) {
    #   aggregate {
    #     sum {
    #       zoneCounterparty: blockchainByCounterpartyBlockchain {
    #         zone: network_id
    #         name
    #         logoUrl: logo_url
    #         isUpToDate: is_synced
    #       }
    #       # ibc transfers
    #       ibcTransfers: ibc_transfers
    #       ibcTransfersPending: ibc_transfers_pending
    #       ibcTransfersFailed: ibc_transfers_failed
    #       ibcTransfersSuccessRate: ibc_transfers_success_rate
    #       # ibc volume
    #       ibcVolumeIn: ibc_cashflow_in
    #       ibcVolumeOut: ibc_cashflow_out
    #       ibcVolumeInPending: ibc_cashflow_in_pending
    #       ibcVolumeOutPending: ibc_cashflow_out_pending
    #     }
    #   }
    # }
    zoneChannels: flat_channels_stats(
      where: {
        blockchain: { _eq: $source }
        timeframe: { _eq: $period }
        blockchainByCounterpartyBlockchain: { is_mainnet: { _eq: true } }
      }
    ) {
      zoneCounterparty: blockchainByCounterpartyBlockchain {
        zone: network_id
        name
        logoUrl: logo_url
        isUpToDate: is_synced
      }
      zoneCounterpartyChannelId: counterparty_channel_id
      channelId: channel_id
      clientId: client_id
      connectionId: connection_id
      isOpened: is_channel_open
      # ibc transfers
      ibcTransfers: ibc_transfers
      ibcTransfersPending: ibc_transfers_pending
      ibcTransfersFailed: ibc_transfers_failed
      ibcTransfersSuccessRate: ibc_transfers_success_rate
      # ibc volume
      ibcVolumeIn: ibc_cashflow_in
      ibcVolumeInPending: ibc_cashflow_in_pending
      ibcVolumeOut: ibc_cashflow_out
      ibcVolumeOutPending: ibc_cashflow_out_pending
    }
  }
`;
