import { gql } from '@apollo/client';

export const BASE_INFO_FRAGMENT = gql`
  fragment BaseInfo on zones_stats {
    id: zone
    logoUrl: zone_label_url
    name: zone_readable_name
  }
`;
