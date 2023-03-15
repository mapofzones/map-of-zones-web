import { gql } from '@apollo/client';

export const ZONES_TOTAL_INFO = gql`
  query ZonesTotalInfo($period: Int!, $isMainnet: Boolean!) {
    totalStats: flat_blockchain_switched_stats_aggregate(
      where: { timeframe: { _eq: $period }, is_mainnet: { _eq: $isMainnet } }
    ) {
      aggregate {
        sum {
          ibcVolume: ibc_cashflow
          ibcVolumePending: ibc_cashflow_pending
          ibcTransfers: ibc_transfers
          ibcTransfersPending: ibc_transfers_pending
        }
      }
    }
    ibcTotalVolumeChart: flat_total_tf_switched_charts(
      where: {
        chart_type: { _eq: "cashflow" }
        is_mainnet: { _eq: $isMainnet }
        timeframe: { _eq: $period }
      }
      order_by: { point_index: asc }
    ) {
      volume: point_value
    }
    allChannels: flat_channels_stats_aggregate(where: { timeframe: { _eq: $period } }) {
      aggregate {
        count
        sum {
          ibcTransfersFailed: ibc_transfers_failed
        }
      }
    }
    activeChannels: flat_channels_stats_aggregate(
      where: { ibc_transfers: { _gt: 0 }, timeframe: { _eq: $period } }
    ) {
      aggregate {
        count
      }
    }
    ibcVolumeTopPair: flat_channels_stats(
      limit: 1
      where: {
        timeframe: { _eq: $period }
        blockchainByBlockchain: { is_mainnet: { _eq: true } }
        blockchainByCounterpartyBlockchain: { is_mainnet: { _eq: true } }
      }
      order_by: { ibc_cashflow: desc_nulls_last }
    ) {
      source: blockchainByBlockchain {
        name
      }
      target: blockchainByCounterpartyBlockchain {
        name
      }
      ibcVolume: ibc_cashflow
      ibcVolumePending: ibc_cashflow_in_pending
    }
    ibcTransfersTopPair: flat_channels_stats(
      limit: 1
      where: {
        timeframe: { _eq: $period }
        blockchainByBlockchain: { is_mainnet: { _eq: true } }
        blockchainByCounterpartyBlockchain: { is_mainnet: { _eq: true } }
      }
      order_by: { ibc_transfers: desc_nulls_last }
    ) {
      source: blockchainByBlockchain {
        name
      }
      target: blockchainByCounterpartyBlockchain {
        name
      }
      ibcTransfers: ibc_transfers
      ibcTransfersPending: ibc_transfers_pending
    }
  }
`;
