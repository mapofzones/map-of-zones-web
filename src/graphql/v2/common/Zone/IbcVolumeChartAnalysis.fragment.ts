import { gql } from '@apollo/client';

export const IBC_VOLUME_CHART_ANALYSIS = gql`
  fragment IbcVolumeChartAnalysis on flat_blockchain_switched_stats {
    ibcVolumeChart: blockchain_tf_switched_charts(
      where: { chart_type: { _eq: "cashflow_general" } }
      order_by: { point_index: asc }
    ) {
      value: point_value
      time: point_index
    }
  }
`;
