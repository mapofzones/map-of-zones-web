import { gql } from '@apollo/client';

export const ZONE_OVERVIEW_IBC_TRANSFERS = gql`
  query ZoneOverviewIbcTransfersCard($zone: String!, $period: Int!, $isMainnet: Boolean!) {
    ibcTransfersCardData: flat_blockchain_switched_stats(
      where: {
        blockchain: { _eq: $zone }
        timeframe: { _eq: $period }
        is_mainnet: { _eq: $isMainnet }
      }
    ) {
      ibcTransfers: ibc_transfers
      ibcTransfersPending: ibc_transfers_pending
      ibcTransfersChart: blockchain_tf_switched_charts(
        where: { chart_type: { _eq: "transfers_general" } }
        order_by: { point_index: asc }
      ) {
        ibcTransfer: point_value
        time: point_index
      }
      ibcTransfersPendingChart: blockchain_tf_switched_charts(
        where: { chart_type: { _eq: "transfers_pending" } }
        order_by: { point_index: asc }
      ) {
        pending: point_value
        time: point_index
      }
    }
  }
`;
