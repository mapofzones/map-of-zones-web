import { gql } from '@apollo/client';

import { ZONE_BASE_INFO_V1 } from 'graphql/v2/common/Zone/ZoneBaseInfo.fragment';

export const ZONES_LIST_ZONE_DETAILS = gql`
  ${ZONE_BASE_INFO_V1}
  query ZonesListZoneDetails($zone: String!, $timeframe: Int!, $isMainnet: Boolean!) {
    zoneDetails: flat_blockchains(
      limit: 1
      where: {
        blockchain_switched_stats: {
          is_mainnet: { _eq: $isMainnet }
          timeframe: { _eq: $timeframe }
        }
        network_id: { _eq: $zone }
      }
    ) {
      ...ZoneBaseInfoV2
      isZoneUpToDate: is_synced
      website
      blockchain_switched_stats {
        ibc_peers
      }
    }
  }
`;
