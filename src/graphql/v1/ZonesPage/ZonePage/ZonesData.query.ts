import { gql } from '@apollo/client';

import { ZONE_BASE_INFO } from '../../common/Zone/ZoneBaseInfo.fragment';

export const ZONES_DATA = gql`
  ${ZONE_BASE_INFO}
  query ZonesData($period: Int!, $isMainnet: Boolean!) {
    zonesData: zones_stats(
      where: { timeframe: { _eq: $period }, is_zone_mainnet: { _eq: $isMainnet } }
    ) {
      ...ZoneBaseInfo
    }
  }
`;
