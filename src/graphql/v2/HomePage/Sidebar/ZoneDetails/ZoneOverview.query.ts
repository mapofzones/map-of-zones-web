import { gql } from '@apollo/client';

export const SIDEBAR_ZONE_OVERVIEW = gql`
  query SidebarZoneOverview($zone: String!, $period: Int!, $isMainnet: Boolean!) {
    switchedStats: flat_blockchain_switched_stats(
      where: {
        blockchain: { _eq: $zone }
        timeframe: { _eq: $period }
        is_mainnet: { _eq: $isMainnet }
      }
    ) {
      ibcTransfers: ibc_transfers
      peersCount: ibc_peers
      channelsCount: channels_cnt
      # TODO: add DAU, Token Price, Market Cap
    }
    stats: flat_blockchain_stats(
      where: { blockchain: { _eq: $zone }, timeframe: { _eq: $period } }
    ) {
      totalTxs: txs
      ibcDau: ibc_active_addresses_cnt
    }
  }
`;
