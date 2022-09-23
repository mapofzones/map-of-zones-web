import { gql } from '@apollo/client';

export const ASSETS_TABLE = gql`
  query AseetsTable {
    assets: flat_tokens {
      blockchain: blockchainByBlockchain {
        name
      }
      symbol
      logoUrl: logo_url
      price
      price24hDiffPercent: price_day_diff_percent
      price7dDiffPercent: price_week_diff_percent
      marketCap: market_cap
      volume24h: token_day_trading_volume
      volume24hDiffPercent: token_day_trading_volume_diff_percent
      onChainSupply: on_chain_supply
      priceChart: token_charts(
        where: { chart_type: { _eq: "price_weekly" } }
        order_by: { point_index: asc }
      ) {
        price: point_value
      }
    }
  }
`;
