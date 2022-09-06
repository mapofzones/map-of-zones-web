import { gql } from '@apollo/client';

export const ZONE_PEERS = gql`
  query ZonePeersSidebar($source: String!, $period: Int!, $isMainnet: Boolean!) {
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
            ibcVolume: ibc_cashflow
            ibcVolumeIn: ibc_cashflow_in
            ibcVolumeInPending: ibc_cashflow_in_pending
            ibcVolumeOut: ibc_cashflow_out
            ibcVolumeOutPending: ibc_cashflow_out_pending
          }
        }
        zoneChannels: nodes {
          counterpartyBlockchain: blockchainByCounterpartyBlockchain {
            zone: network_id
            name
            logoUrl: logo_url
          }
          blockchain: blockchainByBlockchain {
            zone: network_id
            name
            logoUrl: logo_url
          }
        }
      }
    }
  }
`;
