import { gql } from '@apollo/client';

import { ZONE_OVERVIEW_ACTIVITY_FRAGMENT } from './ZoneOverviewActivity.fragment';

export const ZONES_PAGE_ZONE_OVERVIEW = gql`
  ${ZONE_OVERVIEW_ACTIVITY_FRAGMENT}
  query ZonesPageZoneOverview($zone: String!, $period: Int!, $isMainnet: Boolean!) {
    zoneOverview: zones_stats(
      where: {
        zone: { _eq: $zone }
        timeframe: { _eq: $period }
        is_zone_mainnet: { _eq: $isMainnet }
      }
    ) {
      ...ZoneOverviewActivity
    }
  }
`;
