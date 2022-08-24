/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { ZoneBaseInfoV2FragmentDoc } from '../../common/Zone/__generated__/ZoneBaseInfo.fragment.generated';
import { ZoneIbcVolumeStatsV2FragmentDoc } from '../Sidebar/ZonesInfo/__generated__/ZoneIbcVolumeStats.fragment.generated';
import { ZoneIbcTransfersStatsV2FragmentDoc } from '../Sidebar/ZonesInfo/__generated__/ZoneIbcTransfersStats.fragment.generated';
import { ZoneTotalTxsStatsV2FragmentDoc } from '../Sidebar/ZonesInfo/__generated__/ZoneTotalTxsStats.fragment.generated';
export type ZonesTableDataQueryVariables = Types.Exact<{
  period: Types.Scalars['Int'];
  isMainnet: Types.Scalars['Boolean'];
  orderBy: Types.Flat_Blockchain_Switched_Stats_Order_By;
  withVolume: Types.Scalars['Boolean'];
  withTransfers: Types.Scalars['Boolean'];
  withTotalTxs: Types.Scalars['Boolean'];
}>;

export type ZonesTableDataQueryResult = {
  __typename?: 'query_root';
  zonesTable: Array<{
    __typename?: 'flat_blockchains';
    zone: string;
    logoUrl: string;
    name: string;
    switchedStats: Array<{
      __typename?: 'flat_blockchain_switched_stats';
      ibcVolume: any;
      ibcVolumePending: any;
      ibcVolumeRating: number;
      ibcVolumeRatingDiff: number;
      ibcTransfers: number;
      ibcTransfersPending: number;
      ibcTransfersRating: number;
      ibcTransfersRatingDiff: number;
      totalTxsRating: number;
      totalTxsRatingDiff: number;
    }>;
    stats: Array<{ __typename?: 'flat_blockchain_stats'; totalTxs: number }>;
  }>;
};

export const ZonesTableDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ZonesTableData' },
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
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'orderBy' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'flat_blockchain_switched_stats_order_by' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'withVolume' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'withTransfers' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'withTotalTxs' } },
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
            alias: { kind: 'Name', value: 'zonesTable' },
            name: { kind: 'Name', value: 'flat_blockchains' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'ZoneBaseInfoV2' } },
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
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'order_by' },
                      value: {
                        kind: 'ListValue',
                        values: [{ kind: 'Variable', name: { kind: 'Name', value: 'orderBy' } }],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ZoneIbcVolumeStatsV2' },
                        directives: [
                          {
                            kind: 'Directive',
                            name: { kind: 'Name', value: 'include' },
                            arguments: [
                              {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'if' },
                                value: {
                                  kind: 'Variable',
                                  name: { kind: 'Name', value: 'withVolume' },
                                },
                              },
                            ],
                          },
                        ],
                      },
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ZoneIbcTransfersStatsV2' },
                        directives: [
                          {
                            kind: 'Directive',
                            name: { kind: 'Name', value: 'include' },
                            arguments: [
                              {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'if' },
                                value: {
                                  kind: 'Variable',
                                  name: { kind: 'Name', value: 'withTransfers' },
                                },
                              },
                            ],
                          },
                        ],
                      },
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ZoneTotalTxsStatsV2' },
                        directives: [
                          {
                            kind: 'Directive',
                            name: { kind: 'Name', value: 'include' },
                            arguments: [
                              {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'if' },
                                value: {
                                  kind: 'Variable',
                                  name: { kind: 'Name', value: 'withTotalTxs' },
                                },
                              },
                            ],
                          },
                        ],
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
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...ZoneBaseInfoV2FragmentDoc.definitions,
    ...ZoneIbcVolumeStatsV2FragmentDoc.definitions,
    ...ZoneIbcTransfersStatsV2FragmentDoc.definitions,
    ...ZoneTotalTxsStatsV2FragmentDoc.definitions,
  ],
} as unknown as DocumentNode<ZonesTableDataQueryResult, ZonesTableDataQueryVariables>;
