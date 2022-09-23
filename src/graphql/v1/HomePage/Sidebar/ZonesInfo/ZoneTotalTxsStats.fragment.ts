import { gql } from '@apollo/client';

export const ZONE_TOTAL_TXS_STATS = gql`
  fragment ZoneTotalTxsStats on zones_stats {
    totalTxs: total_txs
    totalTxsRating: total_txs_mainnet_rating
    totalTxsRatingDiff: total_txs_mainnet_rating_diff
  }
`;
