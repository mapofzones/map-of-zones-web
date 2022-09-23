import { gql } from '@apollo/client';

import { ZONE_BASE_INFO_V2 } from 'graphql/v2/common/Zone/ZoneBaseInfo.fragment';

export const ZONES_LIST_ZONE_DETAILS = gql`
  ${ZONE_BASE_INFO_V2}
  query ZonesListZoneDetails($zone: String!, $isMainnet: Boolean!, $timeframe: Int!) {
    zoneDetails: flat_blockchains(where: { network_id: { _eq: $zone } }) {
      ...ZoneBaseInfoV2
      isZoneUpToDate: is_synced
      website
      switchedStats: blockchain_switched_stats(
        where: { is_mainnet: { _eq: $isMainnet }, timeframe: { _eq: $timeframe } }
      ) {
        peersCount: ibc_peers
      }
    }
  }
`;
