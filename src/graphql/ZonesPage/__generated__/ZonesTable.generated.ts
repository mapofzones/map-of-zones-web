/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ZonesTableQueryVariables = Types.Exact<{
  period: Types.Scalars['Int'];
  orderBy: Types.Zones_Stats_Order_By;
  isMainnet: Types.Scalars['Boolean'];
}>;

export type ZonesTableQueryResult = {
  __typename?: 'query_root';
  zonesTable: Array<{
    __typename?: 'zones_stats';
    zone: string;
    channelsCount?: number | null;
    ibcDauMainnet?: number | null;
    ibcTransfersMainnet?: number | null;
    ibcTransfersPendingMainnet?: number | null;
    ibcVolumeInMainnet?: any | null;
    ibcVolumeInPendingMainnet?: any | null;
    ibcVolumeMainnet?: any | null;
    ibcVolumeOutMainnet?: any | null;
    ibcVolumeOutPendingMainnet?: any | null;
    ibcVolumePendingMainnet?: any | null;
    logoUrl?: string | null;
    name: string;
    peersCountMainnet?: number | null;
    totalTxs?: number | null;
  }>;
};

export const ZonesTableDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ZonesTable' },
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
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'orderBy' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'zones_stats_order_by' } },
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
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'channelsCount' },
                  name: { kind: 'Name', value: 'channels_num' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcDauMainnet' },
                  name: { kind: 'Name', value: 'ibc_active_addresses_mainnet' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcTransfersMainnet' },
                  name: { kind: 'Name', value: 'ibc_transfers_mainnet' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcTransfersPendingMainnet' },
                  name: { kind: 'Name', value: 'ibc_transfers_pending_mainnet' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumeInMainnet' },
                  name: { kind: 'Name', value: 'ibc_cashflow_in_mainnet' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumeInPendingMainnet' },
                  name: { kind: 'Name', value: 'ibc_cashflow_in_pending_mainnet' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumeMainnet' },
                  name: { kind: 'Name', value: 'ibc_cashflow_mainnet' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumeOutMainnet' },
                  name: { kind: 'Name', value: 'ibc_cashflow_out_mainnet' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumeOutPendingMainnet' },
                  name: { kind: 'Name', value: 'ibc_cashflow_out_pending_mainnet' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumePendingMainnet' },
                  name: { kind: 'Name', value: 'ibc_cashflow_pending_mainnet' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'logoUrl' },
                  name: { kind: 'Name', value: 'zone_label_url' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'name' },
                  name: { kind: 'Name', value: 'zone_readable_name' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'peersCountMainnet' },
                  name: { kind: 'Name', value: 'ibc_peers_mainnet' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'totalTxs' },
                  name: { kind: 'Name', value: 'total_txs' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'zone' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ZonesTableQueryResult, ZonesTableQueryVariables>;
