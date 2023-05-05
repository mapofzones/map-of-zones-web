/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ZoneCompareActivityQueryVariables = Types.Exact<{
  zones?: Types.InputMaybe<Array<Types.Scalars['String']> | Types.Scalars['String']>;
  period: Types.Scalars['Int'];
  isMainnet: Types.Scalars['Boolean'];
}>;

export type ZoneCompareActivityQueryResult = {
  data: Array<{
    name: string;
    zone: string;
    switchedStats: Array<{
      ibcVolume: any;
      ibcVolumeIn: any;
      ibcVolumeOut: any;
      ibcVolumeInPercent: any;
      ibcVolumeOutPercent: any;
      ibcTransfers: number;
    }>;
    stats: Array<{ totalTxs: number; ibcDau?: number | null; dau?: number | null }>;
  }>;
};

export const ZoneCompareActivityDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ZoneCompareActivity' },
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
            alias: { kind: 'Name', value: 'data' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'zone' },
                  name: { kind: 'Name', value: 'network_id' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'switchedStats' },
                  name: { kind: 'Name', value: 'blockchain_switched_stats' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'where' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
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
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'is_mainnet' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: '_eq' },
                                  value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'isMainnet' },
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
                        alias: { kind: 'Name', value: 'ibcVolumeOut' },
                        name: { kind: 'Name', value: 'ibc_cashflow_out' },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'ibcVolumeInPercent' },
                        name: { kind: 'Name', value: 'ibc_cashflow_in_percent' },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'ibcVolumeOutPercent' },
                        name: { kind: 'Name', value: 'ibc_cashflow_out_percent' },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'ibcTransfers' },
                        name: { kind: 'Name', value: 'ibc_transfers' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'stats' },
                  name: { kind: 'Name', value: 'blockchain_stats' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'where' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
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
                        alias: { kind: 'Name', value: 'totalTxs' },
                        name: { kind: 'Name', value: 'txs' },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'ibcDau' },
                        name: { kind: 'Name', value: 'ibc_active_addresses_cnt' },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'dau' },
                        name: { kind: 'Name', value: 'active_addresses_cnt' },
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
} as unknown as DocumentNode<ZoneCompareActivityQueryResult, ZoneCompareActivityQueryVariables>;
