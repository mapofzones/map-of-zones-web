import { gql } from '@apollo/client';

export const TOTAL_INFO_QUERY = gql`
  query GetTotalInfo(
    $period: Int!
    $isMainnet: Boolean!
    $withVolume: Boolean!
    $withTransfers: Boolean!
  ) {
    headers(where: { timeframe: { _eq: $period }, is_mainnet_only: { _eq: $isMainnet } }) {
      ibcVolume: ibc_cashflow_period @include(if: $withVolume)
      ibcVolumePending: ibc_cashflow_pending_period @include(if: $withVolume)
      ibcTransfers: ibc_transfers_period @include(if: $withTransfers)
      ibcTransfersPending: ibc_transfers_pending_period @include(if: $withTransfers)
    }
  }
`;
