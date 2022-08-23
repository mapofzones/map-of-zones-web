import { gql } from '@apollo/client';

export const ZONE_BASE_INFO = gql`
  fragment ZoneBaseInfo on zones_stats {
    zone
    logoUrl: zone_label_url
    name: zone_readable_name
  }
`;
