import { gql } from '@apollo/client';

export const ZONES_COMPARE_ACTIVITY = gql`
  query ZoneCompareActivity($zones: [String!], $period: Int!, $isMainnet: Boolean!) {
    data: flat_blockchains(where: { network_id: { _in: $zones } }) {
      name
      zone: network_id
      switchedStats: blockchain_switched_stats(
        where: { timeframe: { _eq: $period }, is_mainnet: { _eq: $isMainnet } }
      ) {
        ibcVolume: ibc_cashflow
        ibcVolumeIn: ibc_cashflow_in
        ibcVolumeOut: ibc_cashflow_out
        ibcVolumeInPercent: ibc_cashflow_in_percent
        ibcVolumeOutPercent: ibc_cashflow_out_percent
        ibcTransfers: ibc_transfers
      }
      stats: blockchain_stats(where: { timeframe: { _eq: $period } }) {
        totalTxs: txs
        ibcDau: ibc_active_addresses_cnt
        dau: active_addresses_cnt
      }
    }
  }
`;
