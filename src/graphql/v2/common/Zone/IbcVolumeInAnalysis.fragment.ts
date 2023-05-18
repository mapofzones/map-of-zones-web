import { gql } from '@apollo/client';

export const IBC_VOLUME_IN_ANALYSIS = gql`
  fragment IbcVolumeInFieldAnalysis on flat_blockchain_switched_stats {
    ibcVolumeIn: blockchain_tf_switched_charts_aggregate(
      where: { chart_type: { _eq: "cashflow_in" } }
      order_by: { point_index: desc }
      limit: $periodInDays
      offset: 1 # exclude last point, because it's not completed period
    ) {
      aggregate {
        sum {
          volumeIn: point_value
        }
      }
    }
  }
`;
