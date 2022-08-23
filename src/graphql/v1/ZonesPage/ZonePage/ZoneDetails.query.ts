import { gql } from '@apollo/client';

import { ZONE_BASE_INFO } from 'graphql/v1/common/Zone/ZoneBaseInfo.fragment';

export const ZONES_LIST_ZONE_DETAILS = gql`
  ${ZONE_BASE_INFO}
  query ZonesListZoneDetails($zone: String!) {
    zoneDetails: zones_stats(limit: 1, where: { zone: { _eq: $zone } }) {
      ...ZoneBaseInfo
      isZoneUpToDate: is_zone_up_to_date
      peersCount: ibc_peers_mainnet
      website
    }
  }
`;
