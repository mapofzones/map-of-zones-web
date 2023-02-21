import { gql } from '@apollo/client';

export const ZONE_OVERVIEW_ACTIVITY = gql`
  query ZoneOverviewActivity($zone: String!, $period: Int!, $isMainnet: Boolean!) {
    switchedStats: flat_blockchain_switched_stats_by_pk(
      blockchain: $zone
      timeframe: $period
      is_mainnet: $isMainnet
    ) {
      ibcVolume: ibc_cashflow
      ibcVolumeIn: ibc_cashflow_in
      ibcVolumeOut: ibc_cashflow_out
      ibcVolumeInPercent: ibc_cashflow_in_percent
      ibcVolumeOutPercent: ibc_cashflow_out_percent
      ibcTransfers: ibc_transfers
    }
    stats: flat_blockchain_stats(
      where: { blockchain: { _eq: $zone }, timeframe: { _eq: $period } }
    ) {
      totalTxs: txs
      ibcDau: ibc_active_addresses_cnt
      dau: active_addresses_cnt
    }
  }
`;
