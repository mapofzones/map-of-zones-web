import { gql } from '@apollo/client';

export const ASSETS_TOTAL_INFO = gql`
  query AseetsTotalInfo {
    aggregatedData: flat_tokens_aggregate {
      aggregate {
        count
        sum {
          marketCap: market_cap
          volume24h: token_day_trading_volume
        }
      }
    }
    marketCapDominance: flat_tokens(order_by: { market_cap: desc_nulls_last }, limit: 1) {
      logoUrl: logo_url
      symbol
      blockchain: blockchainByBlockchain {
        name
      }
      marketCap: market_cap
    }
    topMover: flat_tokens(order_by: { price_day_diff_percent: desc_nulls_last }, limit: 1) {
      logoUrl: logo_url
      symbol
      blockchain: blockchainByBlockchain {
        name
      }
      price
      price24hDiffPercent: price_day_diff_percent
    }
    total24hTradingVolumeChart: flat_total_tf_switched_charts(
      where: { chart_type: { _eq: "trading_volume" } }
      order_by: { point_index: asc }
    ) {
      volume: point_value
    }
  }
`;
