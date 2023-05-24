import { gql } from '@apollo/client';

import { BLOCKCHAIN_PARAMETERS_ANALYSIS } from 'graphql/v2/common/Zone/BlockchainParametersAnalysis.fragment';

export const ZONE_OVERVIEW_PARAMETERS = gql`
  ${BLOCKCHAIN_PARAMETERS_ANALYSIS}
  query ZoneOverviewParameters($zone: String!) {
    blockchain: flat_blockchains(where: { network_id: { _eq: $zone } }) {
      ...BlockchainParametersAnalysis
    }
  }
`;
