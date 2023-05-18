import { gql } from '@apollo/client';

export const IBC_VOLUME_OUT_ANALYSIS = gql`
  fragment IbcVolumeOutFieldAnalysis on flat_blockchain_switched_stats {
    ibcVolumeOut: blockchain_tf_switched_charts_aggregate(
      where: { chart_type: { _eq: "cashflow_out" } }
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
  }
`;
