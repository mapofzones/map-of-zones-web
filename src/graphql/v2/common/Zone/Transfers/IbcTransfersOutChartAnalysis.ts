import { gql } from '@apollo/client';

export const IBC_TRANSFERS_OUT_CHART_ANALYSIS = gql`
  fragment IbcTransfersOutChartAnalysis on flat_blockchain_switched_stats {
    ibcTransfersOutChart: blockchain_tf_switched_charts(
      where: { chart_type: { _eq: "transfers_out" } }
      order_by: { point_index: asc }
    ) {
      value: point_value
      time: point_index
    }
  }
`;
