/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { BaseInfoFragmentDoc } from '../ZonesInfoTable/__generated__/BaseInfo.generated';
import { IbcVolumeStatsFragmentDoc } from '../ZonesInfoTable/__generated__/IbcVolumeStats.generated';
import { IbcTransfersStatsFragmentDoc } from '../ZonesInfoTable/__generated__/IbcTransfersStats.generated';
import { TotalTxsStatsFragmentDoc } from '../ZonesInfoTable/__generated__/TotalTxsStats.generated';
export type ZonesTableDataQueryVariables = Types.Exact<{
  period: Types.Scalars['Int'];
  isMainnet: Types.Scalars['Boolean'];
  orderBy: Types.Zones_Stats_Order_By;
  withVolume: Types.Scalars['Boolean'];
  withTransfers: Types.Scalars['Boolean'];
  withTotalTxs: Types.Scalars['Boolean'];
}>;

export type ZonesTableDataQueryResult = {
  readonly __typename?: 'query_root';
  readonly zonesTable: ReadonlyArray<{
    readonly __typename?: 'zones_stats';
    readonly zone: string;
    readonly logoUrl?: string | null;
    readonly name: string;
    readonly ibcVolume?: any | null;
    readonly ibcVolumePending: any;
    readonly ibcVolumeRating?: number | null;
    readonly ibcVolumeRatingDiff?: number | null;
    readonly ibcTransfers: number;
    readonly ibcTransfersPending: number;
    readonly ibcTransfersRating?: number | null;
    readonly ibcTransfersRatingDiff?: number | null;
    readonly totalTxs?: number | null;
    readonly totalTxsRating: number;
    readonly totalTxsRatingDiff: number;
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
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'zones_stats_order_by' } },
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
            name: { kind: 'Name', value: 'zones_stats' },
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
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'period' } },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'is_zone_mainnet' },
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
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseInfo' } },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'IbcVolumeStats' },
                  directives: [
                    {
                      kind: 'Directive',
                      name: { kind: 'Name', value: 'include' },
                      arguments: [
                        {
                          kind: 'Argument',
                          name: { kind: 'Name', value: 'if' },
                          value: { kind: 'Variable', name: { kind: 'Name', value: 'withVolume' } },
                        },
                      ],
                    },
                  ],
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'IbcTransfersStats' },
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
                  name: { kind: 'Name', value: 'TotalTxsStats' },
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
        ],
      },
    },
    ...BaseInfoFragmentDoc.definitions,
    ...IbcVolumeStatsFragmentDoc.definitions,
    ...IbcTransfersStatsFragmentDoc.definitions,
    ...TotalTxsStatsFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<ZonesTableDataQueryResult, ZonesTableDataQueryVariables>;
