/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ZoneOverviewReturnedAddressesQueryVariables = Types.Exact<{
  zone: Types.Scalars['String'];
  period: Types.Scalars['Int'];
}>;

export type ZoneOverviewReturnedAddressesQueryResult = {
  cardData?: {
    currentActiveAddresses?: number | null;
    previousActiveAddresees?: number | null;
    repeatableAddresses?: number | null;
    ibcCurrentActiveAddresses?: number | null;
    ibcPreviousActiveAddresees?: number | null;
    ibcRepeatableAddresses?: number | null;
  } | null;
};

export const ZoneOverviewReturnedAddressesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ZoneOverviewReturnedAddresses' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'zone' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'period' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'cardData' },
            name: { kind: 'Name', value: 'flat_blockchain_stats_by_pk' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'blockchain' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'zone' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'timeframe' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'period' } },
              },
            ],
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
      },
    },
  ],
} as unknown as DocumentNode<
  ZoneOverviewReturnedAddressesQueryResult,
  ZoneOverviewReturnedAddressesQueryVariables
>;
