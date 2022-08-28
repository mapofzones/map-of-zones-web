import { gql } from '@apollo/client';

export const ZONE_PEERS_V2 = gql`
  query ZonePeers($source: String!, $period: Int!) {
    zonePeers: flat_channels_stats(
      where: { blockchain: { _eq: $source }, timeframe: { _eq: $period } }
    ) {
      blockchain: blockchainByBlockchain {
        zone: network_id
        name
        logoUrl: logo_url
      }
      counterpartyBlockchain: blockchainByCounterpartyBlockchain {
        zone: network_id
        name
        logoUrl: logo_url
      }
      ibcVolumeIn: ibc_cashflow_in
      ibcVolumeOut: ibc_cashflow_out
      ibcVolumeInPending: ibc_cashflow_in_pending
      ibcVolumeOutPending: ibc_cashflow_out_pending
    }
  }
`;
