import { gql } from '@apollo/client';

import { ZONE_IBC_VOLUME_CARD_FRAGMENT_V2 } from 'graphql/v2/common/Cards/ZoneIbcVolumeCard.fragment';

export const SIDEBAR_ZONE_OVERVIEW = gql`
  ${ZONE_IBC_VOLUME_CARD_FRAGMENT_V2}
  query SidebarZoneOverview($zone: String!, $period: Int!, $isMainnet: Boolean!) {
    zoneOverview: flat_blockchain_switched_stats(
      where: {
        blockchain: { _eq: $zone }
        timeframe: { _eq: $period }
        is_mainnet: { _eq: $isMainnet }
      }
    ) {
      ...ZoneIbcVolumeCardV2
      ibcTransfers: ibc_transfers
      peersCount: ibc_peers
      channelsCount: channels_cnt
      # TODO: add DAU, Token Price, Market Cap
    }
    stats: flat_blockchain_stats(
      where: { blockchain: { _eq: $zone }, timeframe: { _eq: $period } }
    ) {
      totalTxs: txs
      ibcDau: ibc_active_addresses_cnt
    }
  }
`;
