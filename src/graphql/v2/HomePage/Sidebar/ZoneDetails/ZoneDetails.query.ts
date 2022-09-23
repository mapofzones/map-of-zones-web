import { gql } from '@apollo/client';

import { ZONE_BASE_INFO_V2 } from 'graphql/v2/common/Zone/ZoneBaseInfo.fragment';

export const ZONE_DETAILS = gql`
  ${ZONE_BASE_INFO_V2}
  query ZoneDetails($zone: String!) {
    zoneDetails: flat_blockchains(limit: 1, where: { network_id: { _eq: $zone } }) {
      ...ZoneBaseInfoV2
      website
    }
  }
`;
