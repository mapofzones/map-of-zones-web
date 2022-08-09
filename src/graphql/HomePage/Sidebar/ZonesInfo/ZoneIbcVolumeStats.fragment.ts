import { gql } from '@apollo/client';

export const ZONE_IBC_VOLUME_STATS = gql`
  fragment ZoneIbcVolumeStats on zones_stats {
    ibcVolume: ibc_cashflow_mainnet
    ibcVolumePending: ibc_cashflow_pending_mainnet
    ibcVolumeRating: ibc_cashflow_mainnet_rating
    ibcVolumeRatingDiff: ibc_cashflow_mainnet_rating_diff
  }
`;
