import { gql } from '@apollo/client';

export const ZONE_OVERVIEW_PARAMETERS = gql`
  query ZoneOverviewToken($zone: String!) {
    overviewToken: flat_tokens(where: { blockchain: { _eq: $zone } }) {
      symbol
      logoUrl: logo_url
      price
      priceDayDiffPercent: price_day_diff_percent
      priceWeekDiffPercent: price_week_diff_percent
      marketCap: market_cap
      tradingVolumeDay: token_day_trading_volume
      priceChart: token_charts(
        where: { chart_type: { _eq: "price" } }
        order_by: { point_index: asc }
      ) {
        price: point_value
      }
      volumeChart: token_charts(
        where: { chart_type: { _eq: "volume" } }
        order_by: { point_index: asc }
      ) {
        volume: point_value
      }
    }
  }
`;
