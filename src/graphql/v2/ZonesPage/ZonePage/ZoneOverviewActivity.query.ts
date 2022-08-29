import { gql } from '@apollo/client';

import { ZONE_IBC_TRANSFERS_CARD_V1_FRAGMENT } from 'graphql/v2/common/Cards/ZoneIbcTransfersCard.fragment';
import { ZONE_TOTAL_TXS_CARD_V2_FRAGMENT } from 'graphql/v2/common/Cards/ZoneTotalTxsCard.fragment';

export const ZONE_OVERVIEW_ACTIVITY = gql`
  ${ZONE_IBC_TRANSFERS_CARD_V1_FRAGMENT}
  ${ZONE_TOTAL_TXS_CARD_V2_FRAGMENT}
  query ZoneOverviewActivity($zone: String!, $period: Int!, $isMainnet: Boolean!) {
    switchedStats: flat_blockchain_switched_stats(
      where: {
        blockchain: { _eq: $zone }
        timeframe: { _eq: $period }
        is_mainnet: { _eq: $isMainnet }
      }
    ) {
      ...ZoneIbcTransfersCardV2
      peersCount: ibc_peers
      channelsCount: channels_cnt
      # TODO: add DAU
    }
    stats: flat_blockchain_stats(
      where: { blockchain: { _eq: $zone }, timeframe: { _eq: $period } }
    ) {
      ...ZoneTotalTxsCardV2
      ibcDau: ibc_active_addresses_cnt
    }
  }
`;
