/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { ZoneBaseInfoV2FragmentDoc } from '../../common/Zone/__generated__/ZoneBaseInfo.fragment.generated';
export type ZonesMapQueryVariables = Types.Exact<{
  period: Types.Scalars['Int'];
  isMainnet: Types.Scalars['Boolean'];
}>;

export type ZonesMapQueryResult = {
  zonesStats: Array<{
    isMainnet: boolean;
    zone: string;
    logoUrl?: string | null;
    name: string;
    switchedStats: Array<{
      ibcVolume: any;
      ibcVolumeIn: any;
      ibcVolumeOut: any;
      ibcVolumeRating: number;
      ibcTransfersRating: number;
      dauRating?: number | null;
      totalTxsRating: number;
    }>;
  }>;
  zonesGraphs: Array<{ source: string; target: string; ibcVolume: any }>;
};

export const ZonesMapDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ZonesMap' },
      variableDefinitions: [
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
            alias: { kind: 'Name', value: 'zonesStats' },
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
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'ZoneBaseInfoV2' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'isMainnet' },
                  name: { kind: 'Name', value: 'is_mainnet' },
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
                        alias: { kind: 'Name', value: 'ibcVolumeRating' },
                        name: { kind: 'Name', value: 'ibc_cashflow_rating' },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'ibcTransfersRating' },
                        name: { kind: 'Name', value: 'ibc_transfers_rating' },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'dauRating' },
                        name: { kind: 'Name', value: 'active_addresses_cnt_rating' },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'totalTxsRating' },
                        name: { kind: 'Name', value: 'txs_rating' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'zonesGraphs' },
            name: { kind: 'Name', value: 'flat_blockchain_relations' },
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
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'blockchainByBlockchainSource' },
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
                  alias: { kind: 'Name', value: 'source' },
                  name: { kind: 'Name', value: 'blockchain_source' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'target' },
                  name: { kind: 'Name', value: 'blockchain_target' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolume' },
                  name: { kind: 'Name', value: 'ibc_cashflow' },
                },
              ],
            },
          },
        ],
      },
    },
    ...ZoneBaseInfoV2FragmentDoc.definitions,
  ],
} as unknown as DocumentNode<ZonesMapQueryResult, ZonesMapQueryVariables>;
