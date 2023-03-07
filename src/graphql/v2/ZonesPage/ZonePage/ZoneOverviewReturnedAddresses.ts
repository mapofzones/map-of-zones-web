import { gql } from '@apollo/client';

export const ZONE_OVERVIEW_RETURNED_DAILY_ADDRESSES = gql`
  query ZoneOverviewReturnedAddresses($zone: String!, $period: Int!) {
    cardData: flat_blockchain_stats_by_pk(blockchain: $zone, timeframe: $period) {
      # total addresses
      currentActiveAddresses: current_active_addresses
      previousActiveAddresees: previous_active_addresses
      repeatableAddresses: repeatable_addresses
      # ibc addresses
      ibcCurrentActiveAddresses: ibc_current_active_addresses
      ibcPreviousActiveAddresees: ibc_previous_active_addresses
      ibcRepeatableAddresses: ibc_repeatable_addresses
    }
  }
`;
