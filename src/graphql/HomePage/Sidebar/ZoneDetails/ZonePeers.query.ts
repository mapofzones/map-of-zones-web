import { gql } from '@apollo/client';

import { ZONE_PEERS_SHORT_INFO_FRAGMENT } from './ZonePeersShortInfo.fragment';

export const ZONE_PEERS = gql`
  ${ZONE_PEERS_SHORT_INFO_FRAGMENT}
  query ZonePeers($source: String!, $period: Int!) {
    zonePeers: ft_channel_group_stats(
      where: {
        zone: { _eq: $source }
        timeframe: { _eq: $period }
        is_zone_counterparty_mainnet: { _eq: true }
      }
    ) {
      ...ZonePeersShortInfo
    }
  }
`;
