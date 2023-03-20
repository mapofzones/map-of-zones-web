import { gql } from '@apollo/client';

import { ZONE_IBC_TRANSFERS_STATS } from './Sidebar/ZonesInfo/ZoneIbcTransfersStats.fragment';
import { ZONE_IBC_VOLUME_STATS } from './Sidebar/ZonesInfo/ZoneIbcVolumeStats.fragment';
import { ZONE_TOTAL_TXS_STATS } from './Sidebar/ZonesInfo/ZoneTotalTxsStats.fragment';
import { ZONE_BASE_INFO } from '../common/Zone/ZoneBaseInfo.fragment';

export const ZONES_TABLE_DATA = gql`
  ${ZONE_BASE_INFO}
  ${ZONE_IBC_VOLUME_STATS}
  ${ZONE_IBC_TRANSFERS_STATS}
  ${ZONE_TOTAL_TXS_STATS}
  query ZonesTableData(
    $period: Int!
    $isMainnet: Boolean!
    $orderBy: zones_stats_order_by!
    $withVolume: Boolean!
    $withTransfers: Boolean!
    $withTotalTxs: Boolean!
  ) {
    zonesTable: zones_stats(
      where: { timeframe: { _eq: $period }, is_zone_mainnet: { _eq: $isMainnet } }
      order_by: [$orderBy]
    ) {
      ...ZoneBaseInfo
      ...ZoneIbcVolumeStats @include(if: $withVolume)
      ...ZoneIbcTransfersStats @include(if: $withTransfers)
      ...ZoneTotalTxsStats @include(if: $withTotalTxs)
    }
  }
`;
