import { gql } from '@apollo/client';

import { ZONE_BASE_INFO_V2 } from '../Zone/ZoneBaseInfo.fragment';

export const ZONES_DATA_V2 = gql`
  ${ZONE_BASE_INFO_V2}
  query ZonesData($isMainnet: Boolean!) {
    zonesData: flat_blockchains(where: { is_mainnet: { _eq: $isMainnet } }) {
      ...ZoneBaseInfoV2
    }
  }
`;
