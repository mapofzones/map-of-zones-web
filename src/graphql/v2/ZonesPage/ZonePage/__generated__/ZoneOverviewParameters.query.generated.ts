/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ZoneOverviewParametersQueryVariables = Types.Exact<{
  zone: Types.Scalars['String'];
}>;

export type ZoneOverviewParametersQueryResult = {
  blockchain: Array<{
    inflation?: any | null;
    stackingApr?: any | null;
    unbondingPeriod?: number | null;
    bondedTokens?: any | null;
    bondedTokensPercent?: any | null;
    validatorsCnt?: number | null;
    nodesCnt?: number | null;
    token?: { onChainSupply?: any | null } | null;
  }>;
};

export const ZoneOverviewParametersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ZoneOverviewParameters' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'zone' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'blockchain' },
            name: { kind: 'Name', value: 'flat_blockchains' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'network_id' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_eq' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'zone' } },
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
                { kind: 'Field', name: { kind: 'Name', value: 'inflation' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'stackingApr' },
                  name: { kind: 'Name', value: 'staking_apr' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'unbondingPeriod' },
                  name: { kind: 'Name', value: 'unbonding_period' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'token' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'onChainSupply' },
                        name: { kind: 'Name', value: 'on_chain_supply' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'bondedTokens' },
                  name: { kind: 'Name', value: 'bonded_tokens' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'bondedTokensPercent' },
                  name: { kind: 'Name', value: 'bonded_tokens_percent' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'validatorsCnt' },
                  name: { kind: 'Name', value: 'validators_cnt' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'nodesCnt' },
                  name: { kind: 'Name', value: 'nodes_cnt' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ZoneOverviewParametersQueryResult,
  ZoneOverviewParametersQueryVariables
>;
