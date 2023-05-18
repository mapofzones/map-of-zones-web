import { gql } from '@apollo/client';

export const IBC_VOLUME_OUT_CHART_ANALYSIS = gql`
  fragment IbcVolumeOutChartAnalysis on flat_blockchain_switched_stats {
    ibcVolumeOutChart: blockchain_tf_switched_charts(
      where: { chart_type: { _eq: "cashflow_out" } }
      order_by: { point_index: asc }
    ) {
      value: point_value
      time: point_index
    }
  }
`;
