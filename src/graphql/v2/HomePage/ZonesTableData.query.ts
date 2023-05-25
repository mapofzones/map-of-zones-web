import { gql } from '@apollo/client';

import { ZONE_IBC_TRANSFERS_STATS_V2 } from './Sidebar/ZonesInfo/ZoneIbcTransfersStats.fragment';
import { ZONE_IBC_VOLUME_STATS_V2 } from './Sidebar/ZonesInfo/ZoneIbcVolumeStats.fragment';
import { ZONE_TOTAL_TXS_STATS_V2 } from './Sidebar/ZonesInfo/ZoneTotalTxsStats.fragment';
import { ZONE_BASE_INFO_V2 } from '../common/Zone/ZoneBaseInfo.fragment';

export const ZONES_TABLE_DATA = gql`
  ${ZONE_BASE_INFO_V2}
  ${ZONE_IBC_VOLUME_STATS_V2}
  ${ZONE_IBC_TRANSFERS_STATS_V2}
  ${ZONE_TOTAL_TXS_STATS_V2}
  query ZonesTableData(
    $period: Int!
    $isMainnet: Boolean!
    $withVolume: Boolean!
    $withTransfers: Boolean!
    $withTotalTxs: Boolean!
    $withDau: Boolean!
  ) {
    zonesTable: flat_blockchains(where: { is_mainnet: { _eq: $isMainnet } }) {
      ...ZoneBaseInfoV2

      switchedStats: blockchain_switched_stats(
        where: { timeframe: { _eq: $period }, is_mainnet: { _eq: $isMainnet } }
      ) {
        ...ZoneIbcVolumeStatsV2 @include(if: $withVolume)
        ...ZoneIbcTransfersStatsV2 @include(if: $withTransfers)
        ...ZoneTotalTxsStatsV2 @include(if: $withTotalTxs)
        dauRating: active_addresses_cnt_rating @include(if: $withDau)
        dauRatingDiff: active_addresses_cnt_rating_diff @include(if: $withDau)
      }
      stats: blockchain_stats(where: { timeframe: { _eq: $period } }) {
        totalTxs: txs @include(if: $withTotalTxs)
        dau: active_addresses_cnt @include(if: $withDau)
      }
    }
  }
`;
