import { gql } from '@apollo/client';

export const ZONE_IBC_TRANSFERS_CARD_V1_FRAGMENT = gql`
  fragment ZoneIbcTransfersCardV1 on zones_stats {
    ibcTransfers: ibc_transfers_mainnet
    ibcTransfersPending: ibc_transfers_pending_mainnet
  }
`;

export const ZONE_IBC_TRANSFERS_CARD_V2_FRAGMENT = gql`
  fragment ZoneIbcTransfersCardV2 on flat_blockchain_switched_stats {
    ibcTransfers: ibc_transfers
    ibcTransfersPending: ibc_transfers_pending
    ibcTransfersChart: blockchain_tf_switched_charts(
      where: { chart_type: { _eq: "transfers" } }
      order_by: { point_index: asc }
    ) {
      ibcTransfer: point_value
    }
  }
`;
