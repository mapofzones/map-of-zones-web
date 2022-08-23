import { gql } from '@apollo/client';

export const TOTAL_IBC_TRANSFERS_CARD_FRAGMENT = gql`
  fragment TotalIbcTransfersCard on headers {
    ibcTransfers: ibc_transfers_period
    ibcTransfersPending: ibc_transfers_pending_period
  }
`;
