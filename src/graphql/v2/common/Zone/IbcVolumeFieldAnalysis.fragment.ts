import { gql } from '@apollo/client';

export const IBC_VOLUME_ANALYSIS = gql`
  fragment IbcVolumeFieldAnalysis on flat_blockchain_switched_stats {
    ibcVolume: blockchain_tf_switched_charts_aggregate(
      where: { chart_type: { _eq: "cashflow_general" } }
      order_by: { point_index: desc }
      limit: $periodInDays
      offset: 1 # exclude last point, because it's not completed period
    ) {
      aggregate {
        sum {
          volume: point_value
        }
      }
    }
  }
`;
