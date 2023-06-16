import { gql } from '@apollo/client';

import { RETURNED_ACTIVE_ADDRESSES_ANALYSIS } from 'graphql/v2/common/Zone/ReturnedActiveAddresses.fragment';

export const ZONES_COMPARE_RETURNED_ADDRESSES = gql`
  ${RETURNED_ACTIVE_ADDRESSES_ANALYSIS}
  query ZonesCompareReturnedAddresses($zones: [String!], $period: Int!) {
    stats: flat_blockchain_stats(
      where: { blockchain: { _in: $zones }, timeframe: { _eq: $period } }
    ) {
      zone: blockchain
      ...ReturnedActiveAddressesAnalysis
    }
  }
`;
