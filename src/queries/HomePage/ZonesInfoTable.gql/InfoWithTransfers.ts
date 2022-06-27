import { gql } from '@apollo/client';

export const INFO_WITH_TRANSFERS_FRAGMENT = gql`
  fragment InfoWithTransfers on zones_stats {
    ibcTransfers: ibc_transfers
    ibcTransfersPending: ibc_transfers_pending
    ibcTransfersRating: ibc_transfers_rating
    ibcTransfersRatingDiff: ibc_transfers_rating_diff
  }
`;
