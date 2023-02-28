import { gql } from '@apollo/client';

export const ZONE_OVERVIEW_RETURNED_DAILY_ADDRESSES = gql`
  query ZoneOverviewReturnedAddresses($zone: String!) {
    cardData: flat_blockchain_stats_by_pk(blockchain: $zone, timeframe: 24) {
      currentActiveAddresses: current_active_addresses
      previousActiveAddresees: previous_active_addresses
      repeatableAddresses: repeatable_addresses
    }
  }
`;
