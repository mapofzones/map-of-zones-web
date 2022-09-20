import { gql } from '@apollo/client';

export const ZONE_OVERVIEW_PARAMETERS = gql`
  query ZoneOverviewToken($zone: String!) {
    overviewBlockchain: flat_blockchains(where: { network_id: { _eq: $zone } }) {
      token {
        symbol
        logoUrl: logo_url
        price
        priceDayDiffPercent: price_day_diff_percent
        priceWeekDiffPercent: price_week_diff_percent
        priceMonthDiffPercent: price_month_diff_percent
        marketCap: market_cap
        tradingVolumeDay: token_day_trading_volume
      }
    }
  }
`;
