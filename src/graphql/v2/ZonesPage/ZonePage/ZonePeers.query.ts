import { gql } from '@apollo/client';

export const ZONES_LIST_ZONE_PEERS = gql`
  query ZonesListZonePeers($source: String!, $period: Int!, $isMainnet: Boolean!) {
    zones: flat_blockchains(
      where: {
        is_mainnet: { _eq: $isMainnet }
        network_id: { _neq: $source }
        channelsStatsByCounterpartyBlockchain: { blockchain: { _eq: $source } }
      }
    ) {
      data: channelsStatsByCounterpartyBlockchain_aggregate(
        where: { blockchain: { _eq: $source }, timeframe: { _eq: $period } }
      ) {
        aggregate {
          sum {
            # ibc transfers
            ibcTransfers: ibc_transfers
            ibcTransfersPending: ibc_transfers_pending
            ibcTransfersFailed: ibc_transfers_failed
            # ibc volume
            ibcVolume: ibc_cashflow
            ibcVolumePending: ibc_cashflow_pending
            ibcVolumeIn: ibc_cashflow_in
            ibcVolumeInPending: ibc_cashflow_in_pending
            ibcVolumeOut: ibc_cashflow_out
            ibcVolumeOutPending: ibc_cashflow_out_pending
          }
        }
        zoneChannels: nodes {
          zoneCounterparty: blockchainByCounterpartyBlockchain {
            zone: network_id
            name
            logoUrl: logo_url
            isUpToDate: is_synced
          }
          zone: blockchain
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
          ibcVolume: ibc_cashflow
          ibcVolumePending: ibc_cashflow_pending
          ibcVolumeIn: ibc_cashflow_in
          ibcVolumeInPending: ibc_cashflow_in_pending
          ibcVolumeOut: ibc_cashflow_out
          ibcVolumeOutPending: ibc_cashflow_out_pending
        }
      }
    }
  }
`;
