/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ReturnedActiveAddressesAnalysisFragment = {
  currentActiveAddresses?: number | null;
  previousActiveAddresees?: number | null;
  repeatableAddresses?: number | null;
  ibcCurrentActiveAddresses?: number | null;
  ibcPreviousActiveAddresees?: number | null;
  ibcRepeatableAddresses?: number | null;
};

export const ReturnedActiveAddressesAnalysisFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ReturnedActiveAddressesAnalysis' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'flat_blockchain_stats' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'currentActiveAddresses' },
            name: { kind: 'Name', value: 'current_active_addresses' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'previousActiveAddresees' },
            name: { kind: 'Name', value: 'previous_active_addresses' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'repeatableAddresses' },
            name: { kind: 'Name', value: 'repeatable_addresses' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcCurrentActiveAddresses' },
            name: { kind: 'Name', value: 'ibc_current_active_addresses' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcPreviousActiveAddresees' },
            name: { kind: 'Name', value: 'ibc_previous_active_addresses' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcRepeatableAddresses' },
            name: { kind: 'Name', value: 'ibc_repeatable_addresses' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ReturnedActiveAddressesAnalysisFragment, unknown>;
