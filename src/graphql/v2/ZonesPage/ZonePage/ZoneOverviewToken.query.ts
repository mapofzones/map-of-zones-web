import { gql } from '@apollo/client';

import { TokenCharts } from './../../../chart-types';

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
        where: { chart_type: { _eq: "${TokenCharts.price}" } }
        order_by: { point_index: asc }
      ) {
        price: point_value
      }
      volumeChart: token_charts(
        where: { chart_type: { _eq: "${TokenCharts.volume}" } }
        order_by: { point_index: asc }
      ) {
        volume: point_value
      }
    }
  }
`;
