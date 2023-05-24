import { gql } from '@apollo/client';

import { BLOCKCHAIN_PARAMETERS_ANALYSIS } from 'graphql/v2/common/Zone/BlockchainParametersAnalysis.fragment';

export const ZONES_COMPARE_BLOCKCHAIN_PARAMETERS = gql`
  ${BLOCKCHAIN_PARAMETERS_ANALYSIS}
  query ZoneCompareBlockchainParameters($zones: [String!]) {
    blockchains: flat_blockchains(where: { network_id: { _in: $zones } }) {
      zone: network_id
      ...BlockchainParametersAnalysis
    }
  }
`;
