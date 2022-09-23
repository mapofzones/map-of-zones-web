import { gql } from '@apollo/client';

export const ZONE_IBC_TRANSFERS_STATS = gql`
  fragment ZoneIbcTransfersStats on zones_stats {
    ibcTransfers: ibc_transfers_mainnet
    ibcTransfersPending: ibc_transfers_pending_mainnet
    ibcTransfersRating: ibc_transfers_mainnet_rating
    ibcTransfersRatingDiff: ibc_transfers_mainnet_rating_diff
  }
`;
