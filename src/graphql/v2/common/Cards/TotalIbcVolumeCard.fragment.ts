import { gql } from '@apollo/client';

export const TOTAL_IBC_VOLUME_CARD_V1_FRAGMENT = gql`
  fragment TotalIbcVolumeCardV1 on headers {
    ibcVolume: ibc_cashflow_period
    ibcVolumePending: ibc_cashflow_pending_period
    ibcVolumeChart: chart_cashflow
  }
`;

// export const TOTAL_IBC_VOLUME_CARD_V2_FRAGMENT = gql`
//   fragment TotalIbcVolumeCardV2 on flat_blockchain_switched_stats {
//     ibcVolume: ibc_cashflow
//     ibcVolumePending: ibc_cashflow_pending
//     ibcVolumeChart: blockchain_tf_switched_charts(
//         where: { chart_type: { _eq: "${SwitchedCharts.cashflow}" } }
//         order_by: { point_index: asc }
//       ) {
//         ibcVolumeChart: point_value
//       }
//   }
// `;
