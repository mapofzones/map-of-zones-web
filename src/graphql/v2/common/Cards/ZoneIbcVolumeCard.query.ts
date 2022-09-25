import { gql } from '@apollo/client';

export const ZONE_IBC_VOLUME_CARD = gql`
  query ZoneIbcVolumeCard($zone: String!, $period: Int!, $isMainnet: Boolean!) {
    ibcVolumeCardData: flat_blockchain_switched_stats(
      where: {
        blockchain: { _eq: $zone }
        timeframe: { _eq: $period }
        is_mainnet: { _eq: $isMainnet }
      }
    ) {
      ibcVolume: ibc_cashflow
      ibcVolumeIn: ibc_cashflow_in
      ibcVolumeOut: ibc_cashflow_out
      ibcVolumeInPercent: ibc_cashflow_in_percent
      ibcVolumeOutPercent: ibc_cashflow_out_percent
      ibcVolumeInPending: ibc_cashflow_in_pending
      ibcVolumeOutPending: ibc_cashflow_out_pending
      ibcVolumeChart: blockchain_tf_switched_charts(
        where: { chart_type: { _eq: "cashflow" } }
        order_by: { point_index: asc }
      ) {
        volume: point_value
      }
    }
  }
`;
