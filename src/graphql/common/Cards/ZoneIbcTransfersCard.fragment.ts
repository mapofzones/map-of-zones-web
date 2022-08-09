import { gql } from '@apollo/client';

export const ZONE_IBC_TRANSFERS_CARD_FRAGMENT = gql`
  fragment ZoneIbcTransfersCard on zones_stats {
    ibcTransfers: ibc_transfers_mainnet
    ibcTransfersPending: ibc_transfers_pending_mainnet
  }
`;
