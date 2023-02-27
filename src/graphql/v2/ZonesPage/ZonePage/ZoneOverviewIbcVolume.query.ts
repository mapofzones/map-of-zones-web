import { gql } from '@apollo/client';

export const ZONE_OVERVIEW_IBC_VOLUME = gql`
  query ZoneOverviewIbcVolume(
    $zone: String!
    $period: Int!
    $isMainnet: Boolean!
    $periodInDays: Int!
  ) {
    ibcVolumeCardData: flat_blockchain_switched_stats_by_pk(
      blockchain: $zone
      timeframe: $period
      is_mainnet: $isMainnet
    ) {
      ibcVolume: blockchain_tf_switched_charts_aggregate(
        where: {
          blockchain: { _eq: $zone }
          timeframe: { _eq: $period }
          is_mainnet: { _eq: $isMainnet }
          chart_type: { _eq: "cashflow_general" }
        }
        order_by: { point_index: desc }
        limit: $periodInDays
        offset: 1 # exclude last point, because it's not completed period
      ) {
        aggregate {
          sum {
            volume: point_value
          }
        }
      }
      ibcVolumeIn: blockchain_tf_switched_charts_aggregate(
        where: {
          blockchain: { _eq: $zone }
          timeframe: { _eq: $period }
          is_mainnet: { _eq: $isMainnet }
          chart_type: { _eq: "cashflow_in" }
        }
        order_by: { point_index: desc }
        limit: $periodInDays
        offset: 1 # exclude last point, because it's not completed period
      ) {
        aggregate {
          sum {
            volumeIn: point_value
          }
        }
      }
      ibcVolumeOut: blockchain_tf_switched_charts_aggregate(
        where: {
          blockchain: { _eq: $zone }
          timeframe: { _eq: $period }
          is_mainnet: { _eq: $isMainnet }
          chart_type: { _eq: "cashflow_out" }
        }
        order_by: { point_index: desc }
        limit: $periodInDays
        offset: 1 # exclude last point, because it's not completed period
      ) {
        aggregate {
          sum {
            volumeOut: point_value
          }
        }
      }
      ibcVolumeChart: blockchain_tf_switched_charts(
        where: { chart_type: { _eq: "cashflow_general" } }
        order_by: { point_index: asc }
      ) {
        volume: point_value
        time: point_index
      }
      ibcVolumeInChart: blockchain_tf_switched_charts(
        where: { chart_type: { _eq: "cashflow_in" } }
        order_by: { point_index: asc }
      ) {
        volumeIn: point_value
        time: point_index
      }
      ibcVolumeOutChart: blockchain_tf_switched_charts(
        where: { chart_type: { _eq: "cashflow_out" } }
        order_by: { point_index: asc }
      ) {
        volumeOut: point_value
        time: point_index
      }
    }
  }
`;
