import { gql } from '@apollo/client';

import { ZONE_BASE_INFO_V1 } from 'graphql/v2/common/Zone/ZoneBaseInfo.fragment';

export const ZONE_DETAILS = gql`
  ${ZONE_BASE_INFO_V1}
  query ZoneDetails($zone: String!) {
    zoneDetails: zones_stats(limit: 1, where: { zone: { _eq: $zone } }) {
      ...ZoneBaseInfoV1
      website
    }
  }
`;
