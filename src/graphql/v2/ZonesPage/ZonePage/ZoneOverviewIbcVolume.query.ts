import { gql } from '@apollo/client';

export const ZONE_OVERVIEW_IBC_VOLUME = gql`
  query ZoneOverviewIbcVolume($zone: String!, $period: Int!, $isMainnet: Boolean!) {
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
      ibcVolumeChart: blockchain_tf_switched_charts(
        where: { chart_type: { _eq: "cashflow_general" } }
        order_by: { point_index: asc }
      ) {
        volume: point_value
        time: point_index
      }
      ibcVolumeInChart: blockchain_tf_switched_charts(
        where: { chart_type: { _eq: "cashflow_in" } }
        order_by: { point_index: asc }
      ) {
        volumeIn: point_value
        time: point_index
      }
      ibcVolumeOutChart: blockchain_tf_switched_charts(
        where: { chart_type: { _eq: "cashflow_out" } }
        order_by: { point_index: asc }
      ) {
        volumeOut: point_value
        time: point_index
      }
    }
  }
`;
