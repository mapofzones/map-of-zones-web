import { gql } from '@apollo/client';

export const BASE_INFO_FRAGMENT = gql`
  fragment BaseInfo on zones_stats {
    id: zone
    zoneLabelUrl: zone_label_url
    name: zone_readable_name
  }
`;
