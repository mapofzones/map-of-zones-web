import { gql } from '@apollo/client';

import { RETURNED_ACTIVE_ADDRESSES_ANALYSIS } from 'graphql/v2/common/Zone/ReturnedActiveAddresses.fragment';

export const ZONE_OVERVIEW_RETURNED_DAILY_ADDRESSES = gql`
  ${RETURNED_ACTIVE_ADDRESSES_ANALYSIS}
  query ZoneOverviewReturnedAddresses($zone: String!, $period: Int!) {
    cardData: flat_blockchain_stats_by_pk(blockchain: $zone, timeframe: $period) {
      ...ReturnedActiveAddressesAnalysis
    }
  }
`;
