import { gql } from '@apollo/client';

export const ZONES_COUNT = gql`
  query ZonesCount($isMainnet: Boolean!) {
    allZonesCount: flat_blockchains_aggregate(where: { is_mainnet: { _eq: $isMainnet } }) {
      aggregate {
        count
      }
    }
    activeZonesCount: flat_blockchains_aggregate(
      where: {
        is_mainnet: { _eq: $isMainnet }
        blockchain_switched_stats: { ibc_cashflow: { _gt: 0 } }
      }
    ) {
      aggregate {
        count
      }
    }
  }
`;
