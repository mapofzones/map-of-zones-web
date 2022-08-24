import { gql } from '@apollo/client';

export const ZONE_IBC_VOLUME_STATS_V1 = gql`
  fragment ZoneIbcVolumeStatsV1 on zones_stats {
    ibcVolume: ibc_cashflow_mainnet
    ibcVolumePending: ibc_cashflow_pending_mainnet
    ibcVolumeRating: ibc_cashflow_mainnet_rating
    ibcVolumeRatingDiff: ibc_cashflow_mainnet_rating_diff
  }
`;

export const ZONE_IBC_VOLUME_STATS_V2 = gql`
  fragment ZoneIbcVolumeStatsV2 on flat_blockchain_switched_stats {
    ibcVolume: ibc_cashflow
    ibcVolumePending: ibc_cashflow_pending
    ibcVolumeRating: ibc_cashflow_rating
    ibcVolumeRatingDiff: ibc_cashflow_rating_diff
  }
`;
