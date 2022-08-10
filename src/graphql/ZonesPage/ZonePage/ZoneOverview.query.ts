import { gql } from '@apollo/client';

import { ZONE_OVERVIEW_ACTIVITY } from './ZoneOverviewActivity.query';

export const ZONES_PAGE_ZONE_OVERVIEW = gql`
  ${ZONE_OVERVIEW_ACTIVITY}
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
