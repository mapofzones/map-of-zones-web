import { gql } from '@apollo/client';

export const ZONES_COMPARE_INTERCHAIN = gql`
  query ZoneCompareInterchain($zones: [String!], $period: Int!, $isMainnet: Boolean!) {
    data: flat_blockchains(where: { network_id: { _in: $zones } }) {
      name
      zone: network_id
      switchedStats: blockchain_switched_stats(
        where: { timeframe: { _eq: $period }, is_mainnet: { _eq: $isMainnet } }
      ) {
        peersCount: ibc_peers
        channelsCount: channels_cnt
      }
    }
  }
`;
