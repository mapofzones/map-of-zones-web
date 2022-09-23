import { gql } from '@apollo/client';

export const ZONE_TOTAL_TXS_STATS_V1 = gql`
  fragment ZoneTotalTxsStatsV1 on zones_stats {
    totalTxs: total_txs
    totalTxsRating: total_txs_mainnet_rating
    totalTxsRatingDiff: total_txs_mainnet_rating_diff
  }
`;

export const ZONE_TOTAL_TXS_STATS_V2 = gql`
  fragment ZoneTotalTxsStatsV2 on flat_blockchain_switched_stats {
    totalTxsRating: txs_rating
    totalTxsRatingDiff: txs_rating_diff
  }
`;
