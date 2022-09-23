import { gql } from '@apollo/client';

export const ZONE_BASE_INFO_V1 = gql`
  fragment ZoneBaseInfoV1 on zones_stats {
    zone
    logoUrl: zone_label_url
    name: zone_readable_name
  }
`;

export const ZONE_BASE_INFO_V2 = gql`
  fragment ZoneBaseInfoV2 on flat_blockchains {
    zone: network_id
    logoUrl: logo_url
    name: name
  }
`;
