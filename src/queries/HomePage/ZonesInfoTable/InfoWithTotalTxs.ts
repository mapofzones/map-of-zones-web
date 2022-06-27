import { gql } from '@apollo/client';

export const INFO_WITH_TOTAL_TXS_FRAGMENT = gql`
  fragment InfoWithTotalTxs on zones_stats {
    totalTxs: total_txs
    totalTxsRating: total_txs_rating
    totalTxsRatingDiff: total_txs_rating_diff
  }
`;
