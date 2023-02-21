import { gql } from '@apollo/client';

export const ZONE_OVERVIEW_INTERCHAIN = gql`
  query ZoneOverviewInterchain($zone: String!, $period: Int!, $isMainnet: Boolean!) {
    switchedStats: flat_blockchain_switched_stats_by_pk(
      blockchain: $zone
      timeframe: $period
      is_mainnet: $isMainnet
    ) {
      peersCount: ibc_peers
      channelsCount: channels_cnt
    }
  }
`;
