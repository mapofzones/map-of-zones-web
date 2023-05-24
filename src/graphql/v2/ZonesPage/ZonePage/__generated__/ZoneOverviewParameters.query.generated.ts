/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { BlockchainParametersAnalysisFragmentDoc } from '../../../common/Zone/__generated__/BlockchainParametersAnalysis.fragment.generated';
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
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BlockchainParametersAnalysis' },
                },
              ],
            },
          },
        ],
      },
    },
    ...BlockchainParametersAnalysisFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<
  ZoneOverviewParametersQueryResult,
  ZoneOverviewParametersQueryVariables
>;
