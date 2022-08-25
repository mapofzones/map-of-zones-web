import { gql } from '@apollo/client';

export const ZONE_IBC_VOLUME_CARD_FRAGMENT_V1 = gql`
  fragment ZoneIbcVolumeCardV1 on zones_stats {
    ibcVolumeChart: chart_cashflow
    ibcVolumeMainnet: ibc_cashflow_mainnet
    ibcVolumeInMainnet: ibc_cashflow_in_mainnet
    ibcVolumeOutMainnet: ibc_cashflow_out_mainnet
    ibcVolumeInPercent: ibc_cashflow_in_percent_mainnet
    ibcVolumeOutPercent: ibc_cashflow_out_percent_mainnet
    ibcVolumeInPendingMainnet: ibc_cashflow_in_pending_mainnet
    ibcVolumeOutPendingMainnet: ibc_cashflow_out_pending_mainnet
  }
`;

export const ZONE_IBC_VOLUME_CARD_FRAGMENT_V2 = gql`
  fragment ZoneIbcVolumeCardV2 on flat_blockchain_switched_stats {
    ibcVolume: ibc_cashflow
    ibcVolumeIn: ibc_cashflow_in
    ibcVolumeOut: ibc_cashflow_out
    ibcVolumeInPercent: ibc_cashflow_in_percent
    ibcVolumeOutPercent: ibc_cashflow_out_percent
    ibcVolumeInPending: ibc_cashflow_in_pending
    ibcVolumeOutPending: ibc_cashflow_out_pending
    ibcVolumeChart: blockchain_tf_switched_charts(order_by: { point_index: asc }) {
      ibcVolumeChart: point_value
    }
  }
`;
