import { gql } from '@apollo/client';

export const ZONE_OVERVIEW_IBC_TRANSFERS = gql`
  query ZoneOverviewIbcTransfersCard(
    $zone: String!
    $period: Int!
    $isMainnet: Boolean!
    $periodInDays: Int!
  ) {
    ibcTransfersCardData: flat_blockchain_switched_stats_by_pk(
      blockchain: $zone
      timeframe: $period
      is_mainnet: $isMainnet
    ) {
      ibcTransfers: blockchain_tf_switched_charts_aggregate(
        where: {
          blockchain: { _eq: $zone }
          timeframe: { _eq: $period }
          is_mainnet: { _eq: $isMainnet }
          chart_type: { _eq: "transfers_general" }
        }
        order_by: { point_index: desc }
        limit: $periodInDays
        offset: 1 # exclude last point, because it's not completed period
      ) {
        aggregate {
          sum {
            value: point_value
          }
        }
      }
      ibcTransfersIn: blockchain_tf_switched_charts_aggregate(
        where: {
          blockchain: { _eq: $zone }
          timeframe: { _eq: $period }
          is_mainnet: { _eq: $isMainnet }
          chart_type: { _eq: "transfers_in" }
        }
        order_by: { point_index: desc }
        limit: $periodInDays
        offset: 1 # exclude last point, because it's not completed period
      ) {
        aggregate {
          sum {
            value: point_value
          }
        }
      }
      ibcTransfersOut: blockchain_tf_switched_charts_aggregate(
        where: {
          blockchain: { _eq: $zone }
          timeframe: { _eq: $period }
          is_mainnet: { _eq: $isMainnet }
          chart_type: { _eq: "transfers_out" }
        }
        order_by: { point_index: desc }
        limit: $periodInDays
        offset: 1 # exclude last point, because it's not completed period
      ) {
        aggregate {
          sum {
            value: point_value
          }
        }
      }
      ibcTransfersChart: blockchain_tf_switched_charts(
        where: { chart_type: { _eq: "transfers_general" } }
        order_by: { point_index: asc }
      ) {
        ibcTransfer: point_value
        time: point_index
      }
      ibcTransfersInChart: blockchain_tf_switched_charts(
        where: { chart_type: { _eq: "transfers_in" } }
        order_by: { point_index: asc }
      ) {
        value: point_value
        time: point_index
      }
      ibcTransfersOutChart: blockchain_tf_switched_charts(
        where: { chart_type: { _eq: "transfers_out" } }
        order_by: { point_index: asc }
      ) {
        value: point_value
        time: point_index
      }
    }
  }
`;
