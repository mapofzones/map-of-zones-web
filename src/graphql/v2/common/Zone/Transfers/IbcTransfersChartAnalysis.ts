import { gql } from '@apollo/client';

export const IBC_TRANSFERS_CHART_ANALYSIS = gql`
  fragment IbcTransfersChartAnalysis on flat_blockchain_switched_stats {
    ibcTransfersChart: blockchain_tf_switched_charts(
      where: { chart_type: { _eq: "transfers_general" } }
      order_by: { point_index: asc }
    ) {
      value: point_value
      time: point_index
    }
  }
`;
