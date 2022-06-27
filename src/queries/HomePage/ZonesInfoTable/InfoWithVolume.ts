import { gql } from '@apollo/client';

export const INFO_WITH_VOLUME_FRAGMENT = gql`
  fragment InfoWithVolume on zones_stats {
    ibcVolume: ibc_cashflow
    ibcVolumePending: ibc_cashflow_pending
    ibcVolumeRating: ibc_cashflow_rating
    ibcVolumeRatingDiff: ibc_cashflow_rating_diff
  }
`;
