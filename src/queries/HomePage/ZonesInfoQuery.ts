import { gql } from '@apollo/client';

import { BASE_INFO_FRAGMENT } from './ZonesInfoTable/BaseInfo';
import { INFO_WITH_TOTAL_TXS_FRAGMENT } from './ZonesInfoTable/InfoWithTotalTxs';
import { INFO_WITH_TRANSFERS_FRAGMENT } from './ZonesInfoTable/InfoWithTransfers';
import { INFO_WITH_VOLUME_FRAGMENT } from './ZonesInfoTable/InfoWithVolume';

export const ZONES_INFO_QUERY = gql`
  ${BASE_INFO_FRAGMENT}
  ${INFO_WITH_VOLUME_FRAGMENT}
  ${INFO_WITH_TRANSFERS_FRAGMENT}
  ${INFO_WITH_TOTAL_TXS_FRAGMENT}
  query GetZonesInfo(
    $period: Int!
    $isMainnet: Boolean!
    $withVolume: Boolean!
    $withTransfers: Boolean!
    $withTotalTxs: Boolean!
  ) {
    zonesInfo: zones_stats(
      where: { timeframe: { _eq: $period }, is_zone_mainnet: { _eq: $isMainnet } }
    ) {
      ...BaseInfo
      ...InfoWithVolume @include(if: $withVolume)
      ...InfoWithTransfers @include(if: $withTransfers)
      ...InfoWithTotalTxs @include(if: $withTotalTxs)
    }
  }
`;
