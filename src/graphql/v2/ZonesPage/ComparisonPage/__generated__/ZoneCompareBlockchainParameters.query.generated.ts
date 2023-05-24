/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { BlockchainParametersAnalysisFragmentDoc } from '../../../common/Zone/__generated__/BlockchainParametersAnalysis.fragment.generated';
export type ZoneCompareBlockchainParametersQueryVariables = Types.Exact<{
  zones?: Types.InputMaybe<Array<Types.Scalars['String']> | Types.Scalars['String']>;
}>;

export type ZoneCompareBlockchainParametersQueryResult = {
  blockchains: Array<{
    inflation?: any | null;
    zone: string;
    stackingApr?: any | null;
    unbondingPeriod?: number | null;
    bondedTokens?: any | null;
    bondedTokensPercent?: any | null;
    validatorsCnt?: number | null;
    nodesCnt?: number | null;
    token?: { onChainSupply?: any | null } | null;
  }>;
};

export const ZoneCompareBlockchainParametersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ZoneCompareBlockchainParameters' },
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
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'blockchains' },
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
                            name: { kind: 'Name', value: '_in' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'zones' } },
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
                  name: { kind: 'Name', value: 'network_id' },
                },
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
  ZoneCompareBlockchainParametersQueryResult,
  ZoneCompareBlockchainParametersQueryVariables
>;
