import { gql } from '@apollo/client';

export const IBC_TRANSFERS_IN_CHART_ANALYSIS = gql`
  fragment IbcTransfersInChartAnalysis on flat_blockchain_switched_stats {
    ibcTransfersInChart: blockchain_tf_switched_charts(
      where: { chart_type: { _eq: "transfers_in" } }
      order_by: { point_index: asc }
    ) {
      value: point_value
      time: point_index
    }
  }
`;
