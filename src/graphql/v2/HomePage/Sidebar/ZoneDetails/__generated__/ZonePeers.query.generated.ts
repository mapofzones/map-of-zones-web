/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ZonePeersQueryVariables = Types.Exact<{
  source: Types.Scalars['String'];
  period: Types.Scalars['Int'];
}>;

export type ZonePeersQueryResult = {
  zonePeers: Array<{
    ibcVolumeIn: any;
    ibcVolumeOut: any;
    ibcVolumeInPending: any;
    ibcVolumeOutPending: any;
    blockchain: { name: string; zone: string; logoUrl?: string | null };
    counterpartyBlockchain: { name: string; zone: string; logoUrl?: string | null };
  }>;
};

export const ZonePeersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ZonePeers' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'source' } },
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
            alias: { kind: 'Name', value: 'zonePeers' },
            name: { kind: 'Name', value: 'flat_channels_stats' },
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
                            name: { kind: 'Name', value: '_eq' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'source' } },
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
                  alias: { kind: 'Name', value: 'blockchain' },
                  name: { kind: 'Name', value: 'blockchainByBlockchain' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'zone' },
                        name: { kind: 'Name', value: 'network_id' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'logoUrl' },
                        name: { kind: 'Name', value: 'logo_url' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'counterpartyBlockchain' },
                  name: { kind: 'Name', value: 'blockchainByCounterpartyBlockchain' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'zone' },
                        name: { kind: 'Name', value: 'network_id' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'logoUrl' },
                        name: { kind: 'Name', value: 'logo_url' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumeIn' },
                  name: { kind: 'Name', value: 'ibc_cashflow_in' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumeOut' },
                  name: { kind: 'Name', value: 'ibc_cashflow_out' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumeInPending' },
                  name: { kind: 'Name', value: 'ibc_cashflow_in_pending' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumeOutPending' },
                  name: { kind: 'Name', value: 'ibc_cashflow_out_pending' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ZonePeersQueryResult, ZonePeersQueryVariables>;
