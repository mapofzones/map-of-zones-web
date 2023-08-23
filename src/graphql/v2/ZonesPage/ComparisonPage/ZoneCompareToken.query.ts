import { gql } from '@apollo/client';

export const ZONES_COMPARE_Token = gql`
  query ZoneCompareToken($zones: [String!], $chartType: String!) {
    compareTokens: flat_blockchains(where: { network_id: { _in: $zones } }) {
      name
      zone: network_id
      token {
        symbol
        price
        marketCap: market_cap
        tradingVolumeDay: token_day_trading_volume
        chart: token_charts(
          where: { chart_type: { _eq: $chartType } }
          order_by: { point_index: asc }
        ) {
          value: point_value
          time: point_index
        }
      }
    }
  }
`;
