import { gql } from '@apollo/client';

import { ZONE_BASE_INFO } from 'graphql/v1/common/Zone/ZoneBaseInfo.fragment';

export const ZONE_DETAILS = gql`
  ${ZONE_BASE_INFO}
  query ZoneDetails($zone: String!) {
    zoneDetails: zones_stats(limit: 1, where: { zone: { _eq: $zone } }) {
      ...ZoneBaseInfo
      website
    }
  }
`;
