import { gql } from '@apollo/client';

export const TOTAL_IBC_TRANSFERS_CARD_V1_FRAGMENT = gql`
  fragment TotalIbcTransfersCardV1 on headers {
    ibcTransfers: ibc_transfers_period
    ibcTransfersPending: ibc_transfers_pending_period
  }
`;

// export const TOTAL_IBC_TRANSFERS_CARD_V2_FRAGMENT = gql`
//   fragment TotalIbcTransfersCardV2 on flat_blockchain_switched_stats {
//     ibcTransfers: ibc_transfers
//     ibcTransfersPending: ibc_transfers_pending
//   }
// `;
