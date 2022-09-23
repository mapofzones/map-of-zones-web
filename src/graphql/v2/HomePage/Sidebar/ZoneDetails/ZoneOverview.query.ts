import { gql } from '@apollo/client';

export const SIDEBAR_ZONE_OVERVIEW = gql`
  query SidebarZoneOverview($zone: String!, $period: Int!, $isMainnet: Boolean!) {
    blockchain: flat_blockchains(where: { network_id: { _eq: $zone } }) {
      token {
        symbol
        price
        marketCap: market_cap
      }
    }
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
    }
    stats: flat_blockchain_stats(
      where: { blockchain: { _eq: $zone }, timeframe: { _eq: $period } }
    ) {
      totalTxs: txs
      ibcDau: ibc_active_addresses_cnt
      dau: active_addresses_cnt
      ibcDauPercent: ibc_active_addresses_percent
    }
  }
`;
