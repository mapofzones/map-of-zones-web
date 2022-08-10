import { gql } from '@apollo/client';

import { ZONE_IBC_TRANSFERS_CARD_FRAGMENT } from 'graphql/common/Cards/ZoneIbcTransfersCard.fragment';
import { ZONE_IBC_VOLUME_CARD_FRAGMENT } from 'graphql/common/Cards/ZoneIbcVolumeCard.fragment';
import { ZONE_TOTAL_TXS_CARD_FRAGMENT } from 'graphql/common/Cards/ZoneTotalTxsCard.fragment';

export const ZONE_OVERVIEW_ACTIVITY = gql`
  ${ZONE_IBC_VOLUME_CARD_FRAGMENT}
  ${ZONE_IBC_TRANSFERS_CARD_FRAGMENT}
  ${ZONE_TOTAL_TXS_CARD_FRAGMENT}
  query ZoneOverviewActivity($zone: String!, $period: Int!, $isMainnet: Boolean!) {
    zoneOverview: zones_stats(
      where: {
        zone: { _eq: $zone }
        timeframe: { _eq: $period }
        is_zone_mainnet: { _eq: $isMainnet }
      }
    ) {
      ...ZoneIbcVolumeCard
      ...ZoneIbcTransfersCard
      ...ZoneTotalTxsCard
      peersCount: ibc_peers_mainnet
      channelsCount: channels_num
      ibcDauMainnet: ibc_active_addresses_mainnet
    }
  }
`;
