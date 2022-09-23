/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { ZoneBaseInfoFragmentDoc } from '../../common/Zone/__generated__/ZoneBaseInfo.fragment.generated';
import { ZoneIbcVolumeStatsFragmentDoc } from '../Sidebar/ZonesInfo/__generated__/ZoneIbcVolumeStats.fragment.generated';
import { ZoneIbcTransfersStatsFragmentDoc } from '../Sidebar/ZonesInfo/__generated__/ZoneIbcTransfersStats.fragment.generated';
import { ZoneTotalTxsStatsFragmentDoc } from '../Sidebar/ZonesInfo/__generated__/ZoneTotalTxsStats.fragment.generated';
export type ZonesTableDataQueryVariables = Types.Exact<{
  period: Types.Scalars['Int'];
  isMainnet: Types.Scalars['Boolean'];
  orderBy: Types.Zones_Stats_Order_By;
  withVolume: Types.Scalars['Boolean'];
  withTransfers: Types.Scalars['Boolean'];
  withTotalTxs: Types.Scalars['Boolean'];
}>;

export type ZonesTableDataQueryResult = {
  __typename?: 'query_root';
  zonesTable: Array<{
    __typename?: 'zones_stats';
    zone: string;
    logoUrl?: string | null;
    name: string;
    ibcVolume?: any | null;
    ibcVolumePending?: any | null;
    ibcVolumeRating?: number | null;
    ibcVolumeRatingDiff?: number | null;
    ibcTransfers?: number | null;
    ibcTransfersPending?: number | null;
    ibcTransfersRating?: number | null;
    ibcTransfersRatingDiff?: number | null;
    totalTxs?: number | null;
    totalTxsRating?: number | null;
    totalTxsRatingDiff?: number | null;
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
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'ZoneBaseInfo' } },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ZoneIbcVolumeStats' },
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
                  name: { kind: 'Name', value: 'ZoneIbcTransfersStats' },
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
                  name: { kind: 'Name', value: 'ZoneTotalTxsStats' },
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
    ...ZoneBaseInfoFragmentDoc.definitions,
    ...ZoneIbcVolumeStatsFragmentDoc.definitions,
    ...ZoneIbcTransfersStatsFragmentDoc.definitions,
    ...ZoneTotalTxsStatsFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<ZonesTableDataQueryResult, ZonesTableDataQueryVariables>;
