import { gql } from '@apollo/client';

export const RETURNED_ACTIVE_ADDRESSES_ANALYSIS = gql`
  fragment ReturnedActiveAddressesAnalysis on flat_blockchain_stats {
    # total addresses
    currentActiveAddresses: current_active_addresses
    previousActiveAddresees: previous_active_addresses
    repeatableAddresses: repeatable_addresses
    # ibc addresses
    ibcCurrentActiveAddresses: ibc_current_active_addresses
    ibcPreviousActiveAddresees: ibc_previous_active_addresses
    ibcRepeatableAddresses: ibc_repeatable_addresses
  }
`;
