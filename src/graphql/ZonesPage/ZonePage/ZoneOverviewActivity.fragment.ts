import { gql } from '@apollo/client';

import { ZONE_IBC_TRANSFERS_CARD_FRAGMENT } from 'graphql/common/Cards/ZoneIbcTransfersCard.fragment';
import { ZONE_IBC_VOLUME_CARD_FRAGMENT } from 'graphql/common/Cards/ZoneIbcVolumeCard.fragment';
import { ZONE_TOTAL_TXS_CARD_FRAGMENT } from 'graphql/common/Cards/ZoneTotalTxsCard.fragment';

export const ZONE_OVERVIEW_ACTIVITY_FRAGMENT = gql`
  ${ZONE_IBC_VOLUME_CARD_FRAGMENT}
  ${ZONE_IBC_TRANSFERS_CARD_FRAGMENT}
  ${ZONE_TOTAL_TXS_CARD_FRAGMENT}
  fragment ZoneOverviewActivity on zones_stats {
    ...ZoneIbcVolumeCard
    ...ZoneIbcTransfersCard
    ...ZoneTotalTxsCard
    peersCount: ibc_peers_mainnet
    channelsCount: channels_num
    ibcDauMainnet: ibc_active_addresses_mainnet
    # TODO: add DAU column
  }
`;
