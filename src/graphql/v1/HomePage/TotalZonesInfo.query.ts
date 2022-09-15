import { gql } from '@apollo/client';

import { TOTAL_IBC_TRANSFERS_CARD_FRAGMENT } from '../common/Cards/TotalIbcTransfersCard.fragment';
import { TOTAL_IBC_VOLUME_CARD_FRAGMENT } from '../common/Cards/TotalIbcVolumeCard.fragment';

export const TOTAL_ZONES_INFO = gql`
  ${TOTAL_IBC_VOLUME_CARD_FRAGMENT}
  ${TOTAL_IBC_TRANSFERS_CARD_FRAGMENT}
  query TotalZonesInfo(
    $period: Int!
    $isMainnet: Boolean!
    $withVolume: Boolean!
    $withTransfers: Boolean!
  ) {
    headers(where: { timeframe: { _eq: $period }, is_mainnet_only: { _eq: $isMainnet } }) {
      ...TotalIbcVolumeCard @include(if: $withVolume)
      ...TotalIbcTransfersCard @include(if: $withTransfers)
    }
  }
`;
