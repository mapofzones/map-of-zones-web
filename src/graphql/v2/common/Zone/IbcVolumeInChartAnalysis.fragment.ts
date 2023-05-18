import { gql } from '@apollo/client';

export const IBC_VOLUME_IN_CHART_ANALYSIS = gql`
  fragment IbcVolumeInChartAnalysis on flat_blockchain_switched_stats {
    ibcVolumeInChart: blockchain_tf_switched_charts(
      where: { chart_type: { _eq: "cashflow_in" } }
      order_by: { point_index: asc }
    ) {
      value: point_value
      time: point_index
    }
  }
`;
