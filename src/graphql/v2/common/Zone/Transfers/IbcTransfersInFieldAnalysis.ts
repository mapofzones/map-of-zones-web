import { gql } from '@apollo/client';

export const IBC_TRANSFERS_IN_FIELD_ANALYSIS = gql`
  fragment IbcTransfersInFieldAnalysis on flat_blockchain_switched_stats {
    ibcTransfersIn: blockchain_tf_switched_charts_aggregate(
      where: { chart_type: { _eq: "transfers_in" } }
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
  }
`;
