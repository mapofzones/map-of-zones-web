import { gql } from '@apollo/client';

import { ZONE_IBC_VOLUME_CARD_FRAGMENT } from 'graphql/v1/common/Cards/ZoneIbcVolumeCard.fragment';

export const SIDEBAR_ZONE_OVERVIEW = gql`
  ${ZONE_IBC_VOLUME_CARD_FRAGMENT}
  query SidebarZoneOverview($zone: String!, $period: Int!, $isMainnet: Boolean!) {
    zoneOverview: zones_stats(
      where: {
        zone: { _eq: $zone }
        timeframe: { _eq: $period }
        is_zone_mainnet: { _eq: $isMainnet }
      }
    ) {
      zone
      ...ZoneIbcVolumeCard
      totalTxs: total_txs
      ibcTransfers: ibc_transfers
      peersCountMainnet: ibc_peers_mainnet
      channelsCount: channels_num
      ibcDauMainnet: ibc_active_addresses_mainnet
    }
  }
`;
