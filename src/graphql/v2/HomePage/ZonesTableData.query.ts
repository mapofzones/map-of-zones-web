import { gql } from '@apollo/client';

import { ZONE_BASE_INFO_V2 } from '../common/Zone/ZoneBaseInfo.fragment';
import { ZONE_IBC_TRANSFERS_STATS_V2 } from './Sidebar/ZonesInfo/ZoneIbcTransfersStats.fragment';
import { ZONE_IBC_VOLUME_STATS_V2 } from './Sidebar/ZonesInfo/ZoneIbcVolumeStats.fragment';
import { ZONE_TOTAL_TXS_STATS_V2 } from './Sidebar/ZonesInfo/ZoneTotalTxsStats.fragment';

export const ZONES_TABLE_DATA = gql`
  ${ZONE_BASE_INFO_V2}
  ${ZONE_IBC_VOLUME_STATS_V2}
  ${ZONE_IBC_TRANSFERS_STATS_V2}
  ${ZONE_TOTAL_TXS_STATS_V2}
  query ZonesTableData(
    $period: Int!
    $isMainnet: Boolean!
    $orderBy: flat_blockchain_switched_stats_order_by!
    $withVolume: Boolean!
    $withTransfers: Boolean!
    $withTotalTxs: Boolean!
  ) {
    zonesTable: flat_blockchains(where: { is_mainnet: { _eq: $isMainnet } }) {
      ...ZoneBaseInfoV2
      switchedStats: blockchain_switched_stats(
        where: { timeframe: { _eq: $period }, is_mainnet: { _eq: $isMainnet } }
        order_by: [$orderBy]
      ) {
        ...ZoneIbcVolumeStatsV2 @include(if: $withVolume)
        ...ZoneIbcTransfersStatsV2 @include(if: $withTransfers)
        ...ZoneTotalTxsStatsV2 @include(if: $withTotalTxs)
      }
      stats: blockchain_stats(where: { timeframe: { _eq: $period } }) {
        totalTxs: txs
      }
    }
  }
`;
