import { gql } from '@apollo/client';

export const ZONE_IBC_TRANSFERS_STATS_V1 = gql`
  fragment ZoneIbcTransfersStatsV1 on zones_stats {
    ibcTransfers: ibc_transfers_mainnet
    ibcTransfersPending: ibc_transfers_pending_mainnet
    ibcTransfersRating: ibc_transfers_mainnet_rating
    ibcTransfersRatingDiff: ibc_transfers_mainnet_rating_diff
  }
`;

export const ZONE_IBC_TRANSFERS_STATS_V2 = gql`
  fragment ZoneIbcTransfersStatsV2 on flat_blockchain_switched_stats {
    ibcTransfers: ibc_transfers
    ibcTransfersPending: ibc_transfers_pending
    ibcTransfersRating: ibc_transfers_rating
    ibcTransfersRatingDiff: ibc_transfers_rating_diff
  }
`;
