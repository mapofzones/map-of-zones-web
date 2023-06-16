/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { ReturnedActiveAddressesAnalysisFragmentDoc } from '../../../common/Zone/__generated__/ReturnedActiveAddresses.fragment.generated';
export type ZonesCompareReturnedAddressesQueryVariables = Types.Exact<{
  zones?: Types.InputMaybe<Array<Types.Scalars['String']> | Types.Scalars['String']>;
  period: Types.Scalars['Int'];
}>;

export type ZonesCompareReturnedAddressesQueryResult = {
  stats: Array<{
    zone: string;
    currentActiveAddresses?: number | null;
    previousActiveAddresees?: number | null;
    repeatableAddresses?: number | null;
    ibcCurrentActiveAddresses?: number | null;
    ibcPreviousActiveAddresees?: number | null;
    ibcRepeatableAddresses?: number | null;
  }>;
};

export const ZonesCompareReturnedAddressesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ZonesCompareReturnedAddresses' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'zones' } },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
            },
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
            alias: { kind: 'Name', value: 'stats' },
            name: { kind: 'Name', value: 'flat_blockchain_stats' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'blockchain' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_in' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'zones' } },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'timeframe' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_eq' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'period' } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'zone' },
                  name: { kind: 'Name', value: 'blockchain' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ReturnedActiveAddressesAnalysis' },
                },
              ],
            },
          },
        ],
      },
    },
    ...ReturnedActiveAddressesAnalysisFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<
  ZonesCompareReturnedAddressesQueryResult,
  ZonesCompareReturnedAddressesQueryVariables
>;
