/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ZonePeersSidebarQueryVariables = Types.Exact<{
  source: Types.Scalars['String'];
  period: Types.Scalars['Int'];
  isMainnet: Types.Scalars['Boolean'];
}>;

export type ZonePeersSidebarQueryResult = {
  zones: Array<{
    data: {
      aggregate?: {
        sum?: {
          ibcVolume?: any | null;
          ibcVolumeIn?: any | null;
          ibcVolumeInPending?: any | null;
          ibcVolumeOut?: any | null;
          ibcVolumeOutPending?: any | null;
        } | null;
      } | null;
      zoneChannels: Array<{
        counterpartyBlockchain: { name: string; zone: string; logoUrl?: string | null };
        blockchain: { name: string; zone: string; logoUrl?: string | null };
      }>;
    };
  }>;
};

export const ZonePeersSidebarDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ZonePeersSidebar' },
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
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'isMainnet' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'zones' },
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
                      name: { kind: 'Name', value: 'is_mainnet' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_eq' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'isMainnet' } },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'network_id' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_neq' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'source' } },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'channelsStatsByCounterpartyBlockchain' },
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
                                  value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'source' },
                                  },
                                },
                              ],
                            },
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
                  alias: { kind: 'Name', value: 'data' },
                  name: { kind: 'Name', value: 'channelsStatsByCounterpartyBlockchain_aggregate' },
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
                                  value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'source' },
                                  },
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
                                  value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'period' },
                                  },
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
                        name: { kind: 'Name', value: 'aggregate' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sum' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    alias: { kind: 'Name', value: 'ibcVolume' },
                                    name: { kind: 'Name', value: 'ibc_cashflow' },
                                  },
                                  {
                                    kind: 'Field',
                                    alias: { kind: 'Name', value: 'ibcVolumeIn' },
                                    name: { kind: 'Name', value: 'ibc_cashflow_in' },
                                  },
                                  {
                                    kind: 'Field',
                                    alias: { kind: 'Name', value: 'ibcVolumeInPending' },
                                    name: { kind: 'Name', value: 'ibc_cashflow_in_pending' },
                                  },
                                  {
                                    kind: 'Field',
                                    alias: { kind: 'Name', value: 'ibcVolumeOut' },
                                    name: { kind: 'Name', value: 'ibc_cashflow_out' },
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
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'zoneChannels' },
                        name: { kind: 'Name', value: 'nodes' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
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
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ZonePeersSidebarQueryResult, ZonePeersSidebarQueryVariables>;
