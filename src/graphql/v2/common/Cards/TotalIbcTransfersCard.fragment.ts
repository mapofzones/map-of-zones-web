import { gql } from '@apollo/client';

export const TOTAL_IBC_TRANSFERS_CARD_V1_FRAGMENT = gql`
  fragment TotalIbcTransfersCardV1 on headers {
    ibcTransfers: ibc_transfers_period
    ibcTransfersPending: ibc_transfers_pending_period
  }
`;
