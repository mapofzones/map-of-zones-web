import { gql } from '@apollo/client';

export const ZONE_NAME_QUERY = gql`
  query ZoneName($zone: String!) {
    blockchain: flat_blockchains(where: { network_id: { _eq: $zone } }) {
      name
    }
  }
`;
