import { gql } from '@apollo/client';

export const NETWORK_MARKET_CAP = gql`
  query NetworkMarketCapInfo {
    networkMarketCap: flat_tokens_aggregate {
      aggregate {
        sum {
          marketCap: market_cap
        }
      }
    }
  }
`;
