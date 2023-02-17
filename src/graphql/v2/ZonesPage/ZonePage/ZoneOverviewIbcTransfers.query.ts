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
      ibcTransfersPending: ibc_transfers_pending
      ibcTransfersChart: blockchain_tf_switched_charts(
        where: { chart_type: { _eq: "transfers_general" } }
        order_by: { point_index: asc }
      ) {
        ibcTransfer: point_value
        time: point_index
      }
      ibcTransfersPendingChart: blockchain_tf_switched_charts(
        where: { chart_type: { _eq: "transfers_pending" } }
        order_by: { point_index: asc }
      ) {
        pending: point_value
        time: point_index
      }
    }
  }
`;
